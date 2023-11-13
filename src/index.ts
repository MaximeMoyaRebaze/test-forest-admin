import 'dotenv/config';
import { createAgent } from '@forestadmin/agent';
import { createSqlDataSource } from '@forestadmin/datasource-sql';

// Create your Forest Admin agent
// This must be called BEFORE all other middleware on the myExpressApp
const agent = createAgent({
    envSecret: process.env.FOREST_ENV_SECRET ?? "",
    authSecret: process.env.FOREST_AUTH_SECRET ?? "",
    isProduction: process.env.NODE_ENV === 'production',
    typingsPath: './typings.ts',
    typingsMaxDepth: 5,
})
agent.addDataSource(createSqlDataSource(process.env.DATABASE_URL ?? ""))
agent.mountOnStandaloneServer(parseInt(process.env.PORT ?? ""))
agent.start();
