import { Agent } from "@forestadmin/agent";
import { Schema } from "../../typings";
import { customerServiceImplementation } from "../services/implementations/CustomerServiceImplementation";
import { createCustomerAsAdmin } from "../usecases/CreateACustomerAsAdmin";

export function addHookToCreateACustomer(
    agent: Agent<Schema>
) {

    // AGENT COLLECTION ACTION IMPLEMENTATION
    agent.customizeCollection("customers", collection => {

        return collection.addHook('Before', 'Create', async (context) => {

            // INPUT DATA
            const firstname = context.data[0].firstname ?? "";
            const lastname = context.data[0].lastname ?? "";
            const address = context.data[0].address ?? "";
            const phone = context.data[0].phone ?? "";

            // USECASE
            const customerEffect = createCustomerAsAdmin(
                customerServiceImplementation(),
                firstname,
                lastname,
                address,
                phone
            )

            if (customerEffect instanceof Error) {
                return context.throwValidationError(`${customerEffect.message}`)
            }

            // TODO: try to create other collection entity from here

        });

    }
    );
}