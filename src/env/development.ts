import * as path from 'path';
import { IMainConfig } from '.';

const config: IMainConfig = {
  NODE_ENV: 'development',
  PORT: 5000,
  BASE_URL: 'http://localhost:5000/',
  MONGO_URL: 'mongodb://localhost:27017/testAuth',
  MEDIA_PATH: path.resolve(__dirname, '..', '..', 'media') + '/',
  WEB_CLIENT_BASE_URL: 'http://127.0.0.1:3000/'
};

export default config;