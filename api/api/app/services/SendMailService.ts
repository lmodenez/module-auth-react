import nodemailer, { Transport } from 'nodemailer';

import fs from 'fs';
import handlebars from 'handlebars';

class SendMailService {
  async execute(
    path: string,
    type?: string,
    email?: string,
    nome?: string,
    url?: string
  ) {
    const sendType = type || undefined;
    const variables = {
      nome,
      url,
    };

    const templateFileContent = fs.readFileSync(path).toString('utf-8');

    const mailTemplateParse = handlebars.compile(templateFileContent);

    const html = mailTemplateParse(variables);

    try {
      let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        secure: false, // true for 465, false for other ports
        // auth: {
        //   user: process.env.MAIL_USER,
        //   pass: process.env.MAIL_PASSWORD,
        // },
      });

      if (sendType != 'confirm') {
        let info = await transporter.sendMail({
          from: '"Portal Starplast" no-reply@starplast.com.br', // sender address
          to: email, // list of receivers
          subject: 'Solicitação de recuperação de senha! 🔐', // Subject line
          html,
        });

        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      } else {
        let info = await transporter.sendMail({
          from: '"Portal Starplast" no-reply@starplast.com.br', // sender address
          to: email, // list of receivers
          subject: 'Ativação de cadastro! 🔐', // Subject line
          html,
        });

        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      }

      return true;
    } catch (err) {
      console.log(err);
      return;
    }
  }
}

export default new SendMailService();
