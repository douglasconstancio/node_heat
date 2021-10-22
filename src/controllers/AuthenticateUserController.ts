import { Request, Response } from "express";

import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {

  async handle(req: Request, res: Response) {
    const service = new AuthenticateUserService();

    try {
      const result = await service.execute(req.body.code);

      return res.json(result);
    } catch (err) {
      return res.json({ error: err.message });
    };
  };

};

export { AuthenticateUserController };
