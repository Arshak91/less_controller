import * as express from 'express';
import AuthRoutes from './auth/index';
class Routes {

    public router = express.Router();

    constructor() {
        this.routes();
    }

    private routes = () => {
        this.router.use('/address', AuthRoutes);
    }
}

export default new Routes().router;