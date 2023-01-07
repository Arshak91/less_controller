import { Request } from 'express';

export const getResponse = (success: boolean, message: string, data: any = null): IResponseModel => {
  const response: IResponseModel = { success, message, data };
  return response;
};

export const getErrorResponse = (): IResponseModel => {
  const response: IResponseModel = { success: false, message: 'Something went wrong', data: null };
  return response;
};

export interface IResponseModel {
  success: boolean;
  message: string;
  data: any;
}

export interface IRequest extends Request {
  user?: any;
  device?: any;
  token?: string;
}