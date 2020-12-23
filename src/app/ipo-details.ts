
import { Time } from "@angular/common";

export class IPODetails {
    id:number;
    companyname: string;
    stockexchange:string;
    date:Date;
    time:Time;
    totalshares:number;
    pricepershare: number;
    remarks:string;
}
