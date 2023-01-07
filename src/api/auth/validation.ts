import * as Joi from 'joi';
import { Response, NextFunction } from 'express';
import { IRequest, getResponse, getErrorResponse } from '../mainModels';
import APIError from '../../services/APIError';
import SignUpReqModel from './model/req/sign_up';
import { CompanyDirectionType, JobFunctionType } from '../../constants/enums';

export const signUp = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const body: SignUpReqModel = new SignUpReqModel(req.body);
    const bodyValidationSchema = {
      fullName: Joi.string().required(),
      companyName: Joi.string().required(),
      corporateEmail: Joi.string().required(),
      phone: Joi.string().optional(),
      password: Joi.string().min(6).required(),
      company: Joi.number().min(CompanyDirectionType.distributor).max(CompanyDirectionType.other).required(),
      jobFunction: Joi.number().min(JobFunctionType.executive).max(JobFunctionType.planning).required()
    };
    const result = Joi.validate(body, bodyValidationSchema);
    if (result.error) {
      return res.send(getResponse(false, result.error.details[0].message));
    }
    return next();
  } catch (e) {
    new APIError(e, 500, 'signUp function in auth/validation.ts');
    return res.status(500).send(getErrorResponse());
  }
};