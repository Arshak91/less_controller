import * as http         from 'http';
import * as mongoose     from 'mongoose';
import * as bluebird     from 'bluebird';

import app from './app';
import mainConfig from './env';

bluebird.promisifyAll(mongoose);
(<any>mongoose).Promise = bluebird;

// connect to mongo db
mongoose.connect(mainConfig.MONGO_URL, { useNewUrlParser: true }, async () => {
  console.log('Mongodb connected on port 27017');
});
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// listen on port
const server = http.createServer(app).listen(mainConfig.PORT, () => {
  console.log('Server started on port ' + mainConfig.PORT + ` in ${mainConfig.NODE_ENV} mode`);
});

export default server;