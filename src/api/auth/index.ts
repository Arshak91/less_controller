import { Router, Response } from 'express';

import * as Validations from './validation';
import Services from './service';
import { IRequest, getErrorResponse } from '../mainModels';
import APIError from '../../services/APIError';

class AuthRoutes {
    public router = Router();

    constructor() {
        this.routes();
    }

    private routes() {

        /** POST api/auth/signUp        - Functionality for clietns to sign up company accounts */
        this.router.post('/signUp', Validations.signUp, this.signUp);
    }

    private signUp = async (req: IRequest, res: Response) => {
        try {
            const response = await Services.signUp(req.body);
            res.send(response);
        } catch (e) {
            new APIError(e, 500, 'signUp function in auth/service.ts');
            res.status(500).send(getErrorResponse());
        }
    }
}

export default new AuthRoutes().router;