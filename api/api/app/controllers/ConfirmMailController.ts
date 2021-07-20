import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { resolve } from 'path';

import { UserRepository } from '../repositories/UserRepository';
import SendMailService from '../services/SendMailService';

import jwt from 'jsonwebtoken';

const npsPath = resolve(__dirname, '..', 'views', 'emails', 'confirmMail.hbs');

interface TokenPayload {
  id?: number;
  iat?: number;
  exp?: number;
}

class ConfirmMailController {
  async send(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository);
    const { email } = request.body;

    try {
      const findUserEmail = await userRepository.findOne({ email });

      if (!findUserEmail) return response.sendStatus(400);

      const nome: string = findUserEmail.nome;

      const token = await jwt.sign(
        { id: findUserEmail.id },
        String(process.env.JWT_KEY),
        {
          expiresIn: '365d',
        }
      );

      const type = 'confirm';

      const sendMail = await SendMailService.execute(
        npsPath,
        type,
        email,
        nome,
        `http://localhost:3000/confirm/${token}`
      );

      if (!sendMail) return response.sendStatus(400);

      response.sendStatus(200);
    } catch (err) {
      response.status(401);
    }
  }

  async confirm(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository);
    const { userToken } = request.body;

    try {
      const data = jwt.verify(userToken.token, String(process.env.JWT_KEY));

      const { id } = data as TokenPayload;

      const user = await userRepository.find({ id: id });

      if (user) {
        await userRepository.update({ id: user[0].id }, { ativo: 1 });

        return response.sendStatus(200);
      } else {
        return response.sendStatus(400);
      }
    } catch (err) {
      return response.status(401);
    }
  }
}

export { ConfirmMailController };
