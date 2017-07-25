import {BaseEntity} from "./base";
import {User} from "./user";
import {Company} from "./company";

export class Detail {
    name: string;
    description: string;
    number: string;
    providedDate: string;
    returnDate: string;
    amount: string;
    paidAmount: string;
    user: User;
    company: Company;
   }