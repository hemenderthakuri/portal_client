import { Type } from "class-transformer";

export class UserInfo {
    id: number = -1;
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    skills: string = '';
    type: string = '';
}

export class UserResponse {
    @Type(() => UserInfo)
    user: UserInfo = new UserInfo()
}