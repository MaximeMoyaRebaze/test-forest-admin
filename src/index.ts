import 'dotenv/config';
import { createAgent } from '@forestadmin/agent';
import { createSqlDataSource } from '@forestadmin/datasource-sql';
import express, { Request, Response } from 'express';

const myExpressApp = express();
const port = 3000;

// myExpressApp.get('/', (req: Request, res: Response) => {
//     res.send('Hello, World!');
// });

myExpressApp.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Create your Forest Admin agent
// This must be called BEFORE all other middleware on the myExpressApp
createAgent({
    envSecret: process.env.FOREST_ENV_SECRET ?? "",
    authSecret: process.env.FOREST_AUTH_SECRET ?? "",
    isProduction: process.env.NODE_ENV === 'production',
    typingsPath: './typings.ts',
    typingsMaxDepth: 5,
})
    .addDataSource(createSqlDataSource(process.env.DATABASE_URL ?? ""))
    // .addDataSource(createSqlDataSource("postgresql://postgres:password@localhost:5432/template1"))
    .mountOnExpress(myExpressApp)
    // .mountOnStandaloneServer(3000)
    .start();