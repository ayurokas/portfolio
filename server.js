const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/send', (req, res) => {
    const { name, email, message } = req.body;
    
    console.log('Données reçues:', { name, email, message });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'elisa.renuy@gmail.com',
            pass: 'Aiko30042019'
        }
    });

    const mailOptions = {
        from: email,
        to: 'elisa.renuy@gmail.com',
        subject: `Message de ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            return res.status(500).send(error.toString());
        }
        console.log('Email envoyé:', info.response);
        res.status(200).json('Email envoyé avec succès');
    });
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});
