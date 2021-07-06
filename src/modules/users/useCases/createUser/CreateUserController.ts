/* eslint-disable prettier/prettier */
import { Response, Request } from "express";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { User } from "modules/users/model/User";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    
    try{
      const { name, email } = request.body;

      const user = this.createUserUseCase.execute({name, email});
 
      const newUser = {
        name: user.name,
        email: user.email,
        admin: user.admin,
      };
 
      return response.status(201).json({ ...newUser});

    }catch(error){
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateUserController };
