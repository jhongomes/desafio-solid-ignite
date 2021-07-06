import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try{

      const { user_id } = request.params;

      const user = this.turnUserAdminUseCase.execute({ user_id })

      const userAdmin = {
        name: user.name,
        email: user.email,
        admin: user.admin,
      };

      return response.status(200).json({ ...userAdmin})

    }catch(error){
      return response.status(400).json({ error: error.message})

    }
  }
}

export { TurnUserAdminController };
