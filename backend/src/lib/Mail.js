import nodemailer from 'nodemailer';
import { resolve } from 'path';
import exphbs from 'express-handlebars'; // https://handlebarsjs.com/guide/#what-is-handlebars
import nodemailerhbs from 'nodemailer-express-handlebars';
import mailerConfig from '../config/mail';

class Mail {
    constructor() {
        const { host, port, secure, auth } = mailerConfig;
        this.transporter = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: auth.user ? auth : null // Algumas estratégias não possuem autenticação
        });
        this.configureTemplates();
    }

    configureTemplates() {
        const viewPath = resolve(__dirname, '..', 'app', 'views', 'emails');
        // usar uma configuração a mais; 'compile' - método de como é formatado a mensagem
        this.transporter.use(
            'compile',
            nodemailerhbs({
                viewEngine: exphbs.create({
                    layoutsDir: resolve(viewPath, 'layouts'),
                    partialsDir: resolve(viewPath, 'partials'),
                    defaultLayout: 'default',
                    extname: '.hbs'
                }),
                viewPath,
                extName: '.hbs'
            })
        );
    }

    sendMail(message) {
        return this.transporter.sendMail({
            ...mailerConfig.default,
            ...message
        });
    }
}

export default new Mail();
