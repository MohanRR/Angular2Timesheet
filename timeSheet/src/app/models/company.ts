import {BaseEntity} from "./base";
import {User} from "./user";
import {Address} from "./address";
import {Detail} from "./detail";

export class Company extends BaseEntity{
    name: string;
    address: Address;
    users: User[];
    details: Detail[];
   }