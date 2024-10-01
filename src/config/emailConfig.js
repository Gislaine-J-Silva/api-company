const nodemailer = require('nodemailer')

const mailService = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

mailService.verify((error, success) => {
    if (error) {
        console.error('Erro ao verificar o transporter:', error);
    } else {
        console.log('Transporter pronto para enviar e-mails');
    }
});

module.exports = mailService