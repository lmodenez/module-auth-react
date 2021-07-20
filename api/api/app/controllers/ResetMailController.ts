import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { resolve } from 'path';

import { UserRepository } from '../repositories/UserRepository';
import SendMailService from '../services/SendMailService';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const npsPath = resolve(__dirname, '..', 'views', 'emails', 'resetMail.hbs');

interface TokenPayload {
  id?: number;
  iat?: number;
  exp?: number;
}

class ResetMailController {
  async execute(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository);
    const { email } = request.body;

    try {
      const findUserEmail = await userRepository.findOne({ email });

      if (!findUserEmail) return response.sendStatus(400);

      const nome: string = findUserEmail.nome;

      const token = jwt.sign(
        { id: findUserEmail.id },
        String(process.env.JWT_KEY),
        {
          expiresIn: '10m',
        }
      );

      const sendMail = await SendMailService.execute(
        npsPath,
        '',
        email,
        nome,
        `http://localhost:3000/resetarsenha/${token}`
      );

      if (!sendMail) return response.sendStatus(400);

      response.sendStatus(200);
    } catch (err) {
      return response.status(401);
    }
  }

  async reset(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository);
    const { userToken, novaSenha } = request.body;

    try {
      const data = await jwt.verify(
        userToken.token,
        String(process.env.JWT_KEY)
      );

      const { id } = data as TokenPayload;

      const user = await userRepository.find({ id: id });

      if (user) {
        var salt = bcrypt.genSaltSync(10);
        const novaSenhaWithHash = await bcrypt.hashSync(novaSenha, salt);
        await userRepository.update(
          { id: user[0].id },
          { senha: novaSenhaWithHash }
        );

        return response.sendStatus(200);
      } else {
        return response.sendStatus(400);
      }
    } catch (err) {
      return response.status(401);
    }
  }
}

export { ResetMailController };
