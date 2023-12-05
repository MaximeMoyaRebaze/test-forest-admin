import 'dotenv/config';
import { createAgent } from '@forestadmin/agent';
import { createSqlDataSource } from '@forestadmin/datasource-sql';
import { Schema } from '../typings';

// https://docs.forestadmin.com/developer-guide-agents-nodejs/data-sources/getting-started/relationships

const agentOptions = {
    envSecret: process.env.FOREST_ENV_SECRET ?? "",
    authSecret: process.env.FOREST_AUTH_SECRET ?? "",
    isProduction: process.env.NODE_ENV === 'production',
    typingsPath: './src/typings.ts',
    typingsMaxDepth: 5,
}

// Plug multiple data sources to a single agent.
const agent = createAgent<Schema>(agentOptions)
    .addDataSource(createSqlDataSource('postgres://user:pass@a.server:5432/mySchema'))
    .addDataSource(
        createSqlDataSource('postgres://user:pass@another.server:5432/anotherSchema'),
    )
//   .addDataSource(createMongooseDataSource(require('./mongoose-models')));

// Add a relation between a Mongoose collection and a SQL collection.
agent.customizeCollection('chef_availabilities', collection =>
    collection.addOneToManyRelation('chef_towns', 'chef_availabilities', {
        originKey: 'chef_id',
    }),
);