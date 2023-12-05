export class Customer {

    id: number;
    firstname: string;
    lastname: string;
    address: string;
    phone: string;
    created_at: string;
    updated_at: string;
    stripe_id: string;
    bulk_action_started_by: string;

    constructor(
        id: number,
        firstname: string,
        lastname: string,
        address: string,
        phone: string,
        created_at: string,
        updated_at: string,
        stripe_id: string,
        bulk_action_started_by: string,
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.phone = phone;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.stripe_id = stripe_id;
        this.bulk_action_started_by = bulk_action_started_by;
    }

};
