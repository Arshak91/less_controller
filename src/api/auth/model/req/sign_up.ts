import { CompanyDirectionType, JobFunctionType } from "../../../../constants/enums";

const date = new Date();

export default class SignUpReqModel {

    constructor(data: SignUpReqModel) {
        this.fullName = data.fullName;
        this.companyName = data.companyName;
        this.corporateEmail = data.corporateEmail;
        this.phone = data.phone;
        this.password = data.password;
        this.company = data.company;
        this.jobFunction = data.jobFunction;
    }



    public fullName: string;
    public companyName: string;
    public corporateEmail: string;
    public phone: string;
    public password: string;
    public company: CompanyDirectionType;
    public jobFunction: JobFunctionType;
    public createdAt: string = date.toDateString();

    public get signUpModel() {
        return {
            fullName: this.fullName,
            companyName: this.companyName,
            corporateEmail: this.corporateEmail,
            phone: this.phone,
            password: this.password,
            company: this.company,
            jobFunction: this.jobFunction
        }
    }
}