import { Guid } from "guid-typescript";
import { User } from "./user";

export class Jobprofile {
    id: string = Guid.create().toString()
    city: string = '';
    skills: string = '';
    introduction: string = '';
    user: User = new User ()
}
