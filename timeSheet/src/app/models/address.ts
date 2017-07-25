import {BaseEntity} from "./base";
import {User} from "./user";
import {Company} from "./company";

export class Address extends BaseEntity{
    address1: string;
    address2: string;
    city: string;
    state: string;
    postalCode: string;
    mobileNo: string;
    user: User;
    company: Company;
   }