import 'dotenv/config';
import { createAgent } from '@forestadmin/agent';
import { createSqlDataSource } from '@forestadmin/datasource-sql';
import { Schema } from '../../typings';

// https://docs.forestadmin.com/developer-guide-agents-nodejs/agent-customization/agent-customization

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
agent.customizeCollection('customers', collection =>
    collection.addAction('Check if my name is Adrian with server logs', {
        scope: 'Single',
        execute: async (context, resultBuilder) => {
            // use getRecords() for Bulk and Global Actions
            const { firstname } = await context.getRecord(['firstname']);

            let result = ""
            if (firstname === 'Adrian') {
                result = 'Yes your firstname is Adrian!'
                console.log(result);
                return resultBuilder.success(result);
            } else {
                result = 'No you are not Adrian!'
                console.error(result);
                return resultBuilder.error(result);
            }

        },
    }),
);

// Customize the 'customers' collection from the added data source.
agent.customizeCollection('customers', collection =>
    collection.addAction('rename firstname as Adrian', {
        scope: 'Single',
        execute: async context => {
            await context.collection.update(context.filter, { firstname: "Adrian" });
        },
    }),
);

// Customize the 'customers' collection from the added data source.
agent.customizeCollection('customers', collection => {
    collection.addAction('Charge credit card', {
        scope: 'Single',
        form: [
            {
                label: 'amount',
                description: 'The amount (USD) to charge the credit card. Example: 42.50',
                type: 'Number',
                isRequired: true,
            },
        ],
        execute: async (context, resultBuilder) => {
            // Retrieve values entered in the form and columns from the selected record.
            const { amount } = context.formValues;
            const { stripe_id, address } = await context.getRecord([
                'stripe_id',
                'address',
            ]);

            /* ... Charge the credit card here ... */
            return resultBuilder.success('Amount charged!');
        },
    });
});

// Remove the 'chef_availabilities' collection from your user's admin-panel.
agent.removeCollection('chef_availabilities')

// You can still use the 'chef_availabilities' collection in your code
agent.customizeCollection('chef_availabilities', chefAvailabilitiesCollection => {
    // ...
});

agent.mountOnStandaloneServer(parseInt(process.env.PORT ?? ""), 'localhost')
agent.start();
