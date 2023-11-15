import 'dotenv/config';
import { CollectionCustomizer, createAgent } from '@forestadmin/agent';
import { createSqlDataSource } from '@forestadmin/datasource-sql';
import { Schema } from '../../typings';

// https://docs.forestadmin.com/developer-guide-agents-nodejs/data-sources/getting-started/queries

const agentOptions = {
    envSecret: process.env.FOREST_ENV_SECRET ?? "",
    authSecret: process.env.FOREST_AUTH_SECRET ?? "",
    isProduction: process.env.NODE_ENV === 'production',
    typingsPath: './src/typings.ts',
    typingsMaxDepth: 5,
}
const agent = createAgent<Schema>(agentOptions)
const sqlDataSource = createSqlDataSource(process.env.DATABASE_URL ?? "")
agent.addDataSource(sqlDataSource)

const addSegmentToChefAvailabilities = (chef_availabilities: CollectionCustomizer<Schema, 'chef_availabilities'>) =>
    chef_availabilities.addSegment('mySegment', async context => {
        const rows = await context.dataSource
            .getCollection('chef_availabilities')
            .aggregate({}, { operation: 'Count', groups: [{ field: 'chef_id' }] }, 10);

        return { field: 'id', operator: 'In', value: rows.map(r => r['value']) };
    });
agent.customizeCollection("chef_availabilities", addSegmentToChefAvailabilities)

agent.mountOnStandaloneServer(parseInt(process.env.PORT ?? ""), 'localhost')
agent.start();
