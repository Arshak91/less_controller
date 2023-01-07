const env: string = process.env.NODE_ENV || 'development';
const mainConfig: IMainConfig = require(`./${env}`).default;

export interface IMainConfig {
  NODE_ENV: string;
  BASE_URL: string;
  PORT: number;
  MONGO_URL: string;
  MEDIA_PATH: string;
  WEB_CLIENT_BASE_URL: string;
}

export default mainConfig;