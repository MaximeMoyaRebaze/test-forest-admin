import { Customer } from "../entity/Customer"
import { CustomerService } from "../services/interfaces/CustomerService"

export const createCustomerAsAdmin:
    (CustomerService: CustomerService, firstname: string, lastname: string, address: string, phone: string) => Customer | Error =
    (CustomerService: CustomerService, firstname: string, lastname: string, address: string, phone: string) => {
        if (firstname.trim() === "") {
            return new Error("firstname is missing")
        }
        if (lastname.trim() === "") {
            return new Error("lastname is missing")
        }
        if (address.trim() === "") {
            return new Error("address is missing")
        }
        if (phone.trim() === "" || phone.trim().length !== 10) {
            return new Error("phone is missing or incorrect (10 numbers required)")
        }
        return CustomerService.createCustomer(firstname, lastname, address, phone)
    }