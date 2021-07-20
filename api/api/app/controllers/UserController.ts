import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import { UserRepository } from '../repositories/UserRepository';

class UserController {
  async create(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository);
    const user = request.body;

    try {
      const findUser = await userRepository.findOne({
        where: [{ email: user.email }, { usuario: user.usuario }],
      });

      if (findUser) return response.sendStatus(409);
      console.log(user);

      const userCreate = await userRepository.create(user);
      await userRepository.save(userCreate);

      return response.sendStatus(200).json(userCreate);
    } catch {
      return response.status(401);
    }
  }

  async reset(request: Request, response: Response) {}
}
export { UserController };
