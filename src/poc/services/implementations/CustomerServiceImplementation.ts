import { Customer } from "../../entity/Customer"
import { CustomerService } from "../interfaces/CustomerService"

export const customerServiceImplementation:
    () => CustomerService =
    () => {

        const createCustomer = (
            firstname: string,
            lastname: string,
            address: string,
            phone: string
        ): Customer => {
            const dateText = new Date().toUTCString()
            return new Customer(0, firstname, lastname, address, phone, dateText, dateText, "stripe_id", "bulk action started by")
        }

        return { createCustomer }

    }