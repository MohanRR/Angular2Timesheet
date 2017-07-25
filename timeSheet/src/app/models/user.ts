import {BaseEntity} from './base';
import {Address} from './address';
import {Company} from './company';
import {Detail} from './detail';
import {TimeSheet} from './timesheet';

export class User extends BaseEntity{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address: Address;
    companies: Company[];
    details: Detail[];
    timeSheet: TimeSheet[];
    authToken: string;
}