const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'https://saintgabrielnursinghome.com'
}));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kibromhs81@gmail.com',
        pass: process.env.PWD
    }
});
  
app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'kibromhs81@gmail.com',
        subject: `Name is ${name}. Subject is ${subject}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({message: 'Failed to send email'});
        }
        console.log('Email sent:', info.response);
        res.status(200).json({message: 'Email sent successfully'});
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App listening on port ${port}`));