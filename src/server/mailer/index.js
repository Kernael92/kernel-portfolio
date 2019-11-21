import nodemailer from 'nodemailer';

import config from './config';

const transporter = nodemailer.createTransport({
    services: 'Gmail',
    auth: {
        type: 'OAuth2',
        ...config
    }
});

const send = ({ email, name, text }) => {
    const from = name && email ? `${name} <${email}>` : `${name || email}`
    const message = {
        from,
        to: 'apuko.kernael@gmail.com',
        subject: `New message ${from} at kernel-portfolio`,
        text,
        replyTo: from
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) => 
            error ? reject(error) : resolve(info)
        )
    })
}

export default send

