import 'dotenv/config';
import { createAgent } from '@forestadmin/agent';
import { createSqlDataSource } from '@forestadmin/datasource-sql';
import { Schema } from './typings';
import { addSingleActionToCheckStringField, addSingleActionToUpdateStringField } from './tutorial/agent-customization/example-actions'
import { addHookToCreateACustomer } from './tutorial/agent-customization/example-hooks';

// Create your Forest Admin agentOptions
const agentOptions = {
    envSecret: process.env.FOREST_ENV_SECRET ?? "",
    authSecret: process.env.FOREST_AUTH_SECRET ?? "",
    isProduction: process.env.NODE_ENV === 'production',
    typingsPath: './src/typings.ts',
    typingsMaxDepth: 5,
}

// Create Forest Admin agent
// This must be called BEFORE all other middleware of your backend server 'ExpressApp'
const agent = createAgent<Schema>(agentOptions)

// AddDataSource to your Forest Admin agent
const sqlDataSource = createSqlDataSource(process.env.DATABASE_URL ?? "")
agent.addDataSource(sqlDataSource)

// Customize the 'customers' collection from the added data source.
agent.customizeCollection('customers', collection => {
    // Add a Smart Action
    collection.addAction('say hello in forestAdmin', {
        scope: 'Single',
        execute: async (context, resultBuilder) => {
            return resultBuilder.success('Hello !');
        },
    });

})

// Customize the 'customers' collection from the added data source.
addSingleActionToCheckStringField<Schema, 'customers'>(
    agent,
    'customers',
    'lastname',
    'Miller'
)

// Customize the 'customers' collection from the added data source.
addSingleActionToUpdateStringField<Schema, 'customers'>(
    agent,
    'customers',
    'lastname'
)

// Customize the 'customers' collection from the added data source.
addHookToCreateACustomer(agent)

// mount your Forest Admin agent on your backend server
agent.mountOnStandaloneServer(parseInt(process.env.PORT ?? ""), 'localhost')
agent.start();
