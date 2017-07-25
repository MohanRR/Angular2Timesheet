import {BaseEntity} from "./base";
import {User} from "./user";
import {Company} from "./company";

export class TimeSheet extends BaseEntity{
    date: any;
    startTime: string;
    endTime: string;
    totalHours: any;
    projectName: string;
    task: string;
    user: User;
    company: Company;
   }