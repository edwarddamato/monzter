import { Request, Response } from 'express';
import { Api } from '../../../api/monzter';

export default {
  method: 'post',
  name: '/api/getloginurl',
  action: async (req: Request, res: Response) => {    
    try {
      const loginUrl: string = Api.GetMonzoLoginUrl(req.body.userKey, req.body.redirectUrl);
      res.send(loginUrl);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};