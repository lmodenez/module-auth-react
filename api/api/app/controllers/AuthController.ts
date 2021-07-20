import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { UserRepository } from '../repositories/UserRepository';

class AuthController {
  async authenticate(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository);
    const { usuario, senha } = request.body;

    try {
      const findUser = await userRepository.findOne({
        where: [{ usuario: usuario }, { email: usuario }],
      });

      if (!findUser) return response.sendStatus(409);

      const validatePassword = bcrypt.compareSync(senha, findUser.senha);

      if (!validatePassword)
        return response.status(401).send('Invalid User or Password');

      const secret = process.env.JWT_KEY;

      if (secret) {
        const token = jwt.sign({ id: findUser.id }, secret, {
          expiresIn: '60s',
        });

        const { senha, ...user } = findUser;

        return response.status(200).json({ user, token });
      } else {
        return response.sendStatus(409);
      }
    } catch (err) {
      response.status(401);
    }
  }
}

export { AuthController };
