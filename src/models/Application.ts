import { Type } from "class-transformer";
import { JobPostInfo } from "./JobPost";
import { UserInfo } from "./Users";

export class ApplicationInfo {
    id: number = -1;
    @Type(() => JobPostInfo)
    job: JobPostInfo = new JobPostInfo();

    @Type(() => UserInfo)
    candidate: UserInfo = new UserInfo();
    createdOn: Date = new Date();
    updatedOn: Date = new Date();
    status: string = "";
}

export class ApplicationResponse {
    @Type(() => ApplicationInfo)
    application: ApplicationInfo = new ApplicationInfo()

    @Type(() => ApplicationInfo)
    applications: ApplicationInfo[] = new Array<ApplicationInfo>()
}
