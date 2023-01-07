import SignUpReqModel from "../../../../api/auth/model/req/sign_up";
import { getResponse, IResponseModel } from "../../../../api/mainModels";
import Schema from '../../../../schema/mongoDb';

export default class MongoAuthService {

  public signUp = async (body: SignUpReqModel): Promise<IResponseModel> => {
    const user = new Schema.UserSchema(body.signUpModel);
    await user.save();
    return getResponse(true, 'Sign up complete', user);
  };
};
