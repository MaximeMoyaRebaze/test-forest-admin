import { Agent, TFieldName, TSchema, TSimpleRow } from "@forestadmin/agent";

export function addSingleActionToCheckStringField<S extends TSchema, C extends Extract<keyof S, string>>(
    agent: Agent<S>,
    collectionName: C,
    fieldName: TFieldName<S, C>,
    stringToCheck: string
) {
    agent.customizeCollection(collectionName, collection =>
        collection.addAction(`Check if ${fieldName} is equal to ${stringToCheck} with server logs`, {
            scope: 'Single',
            execute: async (context, resultBuilder) => {
                // use getRecords() for Bulk and Global Actions
                const field = await context.getRecord([fieldName]);
                let result = ""
                if (field[fieldName] === stringToCheck) {
                    result = `Yes, ${fieldName} is ${stringToCheck}!`
                    console.log(result);
                    return resultBuilder.success(result);
                } else {
                    result = `No, ${fieldName} is not ${stringToCheck}!`
                    console.error(result);
                    return resultBuilder.error(result);
                }

            },
        }),
    );
}

export function addSingleActionToUpdateStringField<S extends TSchema, C extends Extract<keyof S, string>>(
    agent: Agent<S>,
    collectionName: C,
    fieldName: TFieldName<S, C>
) {
    agent.customizeCollection(collectionName, collection =>
        collection.addAction(`Update ${fieldName}`, {
            scope: 'Single',
            form: [
                {
                    label: fieldName,
                    description: `description how to update ${fieldName}`,
                    type: 'String',
                    isRequired: true,
                },
            ],
            execute: async (context, resultBuilder) => {
                const formValue = context.formValues[fieldName];
                const obj: TSimpleRow<S, C> = {
                    [fieldName]: formValue
                };
                await context.collection.update(context.filter, obj);
            },
        }),
    );
}
