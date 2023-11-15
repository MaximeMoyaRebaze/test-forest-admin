import 'dotenv/config';
import { CollectionCustomizer, createAgent } from '@forestadmin/agent';
import { createSqlDataSource } from '@forestadmin/datasource-sql';
import { Schema } from './typings';
import chef_availabilities from './customization/chef_availabilities';

// Create your Forest Admin agentOptions
const agentOptions = {
    envSecret: process.env.FOREST_ENV_SECRET ?? "",
    authSecret: process.env.FOREST_AUTH_SECRET ?? "",
    isProduction: process.env.NODE_ENV === 'production',
    typingsPath: './src/typings.ts',
    typingsMaxDepth: 5,
}

// Create your Forest Admin agent
// This must be called BEFORE all other middleware of your backend server 'ExpressApp'
const agent = createAgent<Schema>(agentOptions)

// AddDataSource to your Forest Admin agent
const sqlDataSource = createSqlDataSource(process.env.DATABASE_URL ?? "")
agent.addDataSource(sqlDataSource)

// Customize collection of your Forest Admin agent
// agent.customizeCollection('chef_availabilities', chef_availabilities)

const addSegmentToChefAvailabilities = (chef_availabilities: CollectionCustomizer<Schema, 'chef_availabilities'>) =>
    chef_availabilities.addSegment('mySegment', async context => {
        const rows = await context.dataSource
            .getCollection('chef_availabilities')
            .aggregate({}, { operation: 'Count', groups: [{ field: 'chef_id' }] }, 10);

        return { field: 'id', operator: 'In', value: rows.map(r => r['value']) };
    });
agent.customizeCollection("chef_availabilities", addSegmentToChefAvailabilities)

// mount your Forest Admin agent on your backend server
agent.mountOnStandaloneServer(parseInt(process.env.PORT ?? ""), 'localhost')
agent.start();
