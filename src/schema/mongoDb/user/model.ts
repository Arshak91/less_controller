import { Document, Model } from 'mongoose';
import { CompanyDirectionType, JobFunctionType } from '../../../constants/enums';

interface IAuthDocument<U = string, C = string, O = string> extends Document {
    fullName: string;
    companyName: string;
    corporateEmail: string;
    phone: string;
    password: string;
    company: CompanyDirectionType;
    jobFunction: JobFunctionType;
    updatedAt?: string;
    createdAt?: string;
    logoutAt?: string;
}

export interface IAuth<U = string, C = string, O = string> extends IAuthDocument<U, C, O> {

}

export interface IAuthModel extends Model<IAuth<any, any, any>> {

}