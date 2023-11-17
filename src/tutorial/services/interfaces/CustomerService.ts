import { Customer } from "../../entity/Customer";

export interface CustomerService {

    createCustomer: (
        firstname: string,
        lastname: string,
        address: string,
        phone: string
    ) => Customer

}