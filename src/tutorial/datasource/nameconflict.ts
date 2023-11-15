import 'dotenv/config';
import { createAgent } from '@forestadmin/agent';
import { createSqlDataSource } from '@forestadmin/datasource-sql';
import { Schema } from '../../typings';

// https://docs.forestadmin.com/developer-guide-agents-nodejs/data-sources/getting-started/naming-conflicts

const agentOptions = {
    envSecret: process.env.FOREST_ENV_SECRET ?? "",
    authSecret: process.env.FOREST_AUTH_SECRET ?? "",
    isProduction: process.env.NODE_ENV === 'production',
    typingsPath: './src/typings.ts',
    typingsMaxDepth: 5,
}
const agent = createAgent<Schema>(agentOptions)

const sqlDataSource = createSqlDataSource(process.env.DATABASE_URL ?? "")

// if conflict about name, we can rename it in options
agent.addDataSource(sqlDataSource, {
    rename: {
        customers: 'customersFromFrenchBranch',
        stores: 'storesFromFrenchBranch',
    },
})

agent.mountOnStandaloneServer(parseInt(process.env.PORT ?? ""), 'localhost')
agent.start();

