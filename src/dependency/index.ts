import MongoAuthService from './db/mongo/user';

class BaseDb {
    constructor() {
        this.mongoAuth = new MongoAuthService();
    }
    
    public mongoAuth: MongoAuthService;
};
 
export default new BaseDb();