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
                // for scope : 'Bulk' or 'Global' => use getRecords()
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

    // AGENT COLLECTION
    agent.customizeCollection(collectionName, collection => {
        return collection.addAction(

            // ACTION NAME
            `Update ${fieldName}`,

            // ACTION DEFINITION
            {

                // SCOPE TO FOCUS THE TARGET
                scope: 'Single',

                // FORM TO SUBMITTING TO GIVE INPUTS TO USECASE
                form: [
                    {
                        label: fieldName,
                        description: `description how to update ${fieldName}`,
                        type: 'String',
                        isRequired: true,
                    },
                ],

                // USECASE TO EXECUTE BY SUBMITTING FORM
                execute: async (context, resultBuilder) => {

                    // USECASE
                    const recordInitialValue = await context.getRecord([fieldName]);
                    const formValue = context.formValues[fieldName];
                    const obj: TSimpleRow<S, C> = {
                        [fieldName]: formValue
                    };
                    await context.collection.update(context.filter, obj);
                    console.log(`${fieldName} updated from ${recordInitialValue[fieldName]} to ${formValue}`);

                    // RESPONSE IN FORESTADMINDESK
                    return resultBuilder.success(`${fieldName} updated :) ${recordInitialValue[fieldName]} => ${formValue}`)

                },

            })
    }
    );
}
