import * as mongoose from 'mongoose';
import { schemaReferences } from '../../../constants';
import { IAuthModel, IAuth } from './model';

const Schema = mongoose.Schema;

const schema = new Schema({

  fullName: {
    type: String,
    require: true
  },
  companyNmae: {
    type: String,
    require: true
  },
  corporateEmail: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    default: null
  },
  password: {
    type: String,
    require: true
  },
  company: {
    type: Number,
    require: true
  },
  jobFunction: {
    type: Number,
    require: true
  },
  updatedAt: {
    type: String,
    default: null
  },
  createdAt: {
    type: String,
    default: new Date()
  },
  logoutAt: {
    type: String,
    default: null
  }
});

schema.pre('save', async function (next) {
  const _this: any = this;
  if (!_this.isNew) {
    _this.updatedAt = Date.now();
    next();
  };
});

export const user: IAuthModel = mongoose.model<IAuth<any, any, any>, IAuthModel>(schemaReferences.user, schema);
export default user;