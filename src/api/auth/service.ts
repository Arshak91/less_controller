import { IResponseModel, getResponse } from '../mainModels';
import db from '../../dependency';
import SignUpReqModel from './model/req/sign_up';

class AuthServices {
  public signUp = async (body: SignUpReqModel): Promise<IResponseModel> => {
    const result = await db.mongoAuth.signUp(body);
    return result;
  };
  
}

export default new AuthServices();