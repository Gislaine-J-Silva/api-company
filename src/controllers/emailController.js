const transporter = require('../config/emailConfig')

async function sendEmail(req, res){
    const { name, email, phone, areaOfInterest, monetaryPretension, description } = req.body


    const information = [ name, email, phone, areaOfInterest, monetaryPretension, description ]
    const allFieldsFilled = information.every(field => field && field.trim() !== '');

    if (!allFieldsFilled) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }

    try {
        await transporter.sendMail({
            from: `"Pedido de Orçamento" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: 'Orçamento de Cliente',
            text: `
                Nome: ${name}
                Email: ${email}
                Telefone: ${phone}
                Área de Interesse: ${areaOfInterest}
                Pretenção de Investimento: ${monetaryPretension}
                Descrição: ${description}
            `
        })

        return res.status(200).json({ message: 'Email enviado com sucesso!'})
    } catch (error){
        console.error(error)
        return res.status(500).json({ error: 'Erro ao enviar o e-mail'})
    }
}

module.exports = { sendEmail }