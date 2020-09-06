import { Type } from "class-transformer";

export class JobPostInfo {
    id: number = -1;
    title: string = '';
    description: string = '';
    keywords: string = '';
    experienceMin: number = 0;
    experienceMax: number = 0;
    salaryMin: number = 0;
    salaryMax: number = 0;
    location: string = "";
    owner: number = -1;
    createdOn: Date = new Date();
}

export class JobPostResponse {
    @Type(() => JobPostInfo)
    job: JobPostInfo = new JobPostInfo()

    @Type(() => JobPostInfo)
    jobs: JobPostInfo[] = new Array<JobPostInfo>()
}
