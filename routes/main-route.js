const express = require('express');
const path = require('path');
const router = express.Router();
const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid-transport');
const fs = require('fs');

const transporter = nodemailer.createTransport(sendgrid({ auth: { api_key: process.env.sendgridKey } }))

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.get('/about', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'about.html'));
});

router.get('/works', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'works.html'));
});

router.get('/contact', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
});

router.post('/contact', (req, res, next) => {
    const { email, subject, message } = req.body;
    if(email.length === 0 || subject.length === 0 || message.length === 0){
        return res.status(422).sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
    }
    transporter.sendMail({
        to: 'piusgori@gmail.com',
        from: 'dreefstar@gmail.com',
        subject: subject,
        html: `
        <h1>New Message</h1>
        <p>${email} has sent you a new message with the subject: ${subject} and below is the message</p>
        <p>${message}</p>
        <p>Respond A$AP</p>
        `
    })
    res.sendFile(path.join(__dirname, '../', 'views', 'thankyou.html'));
});

router.get('/resume', (req, res, next) => {
    const setPath = path.join(__dirname, '../', 'public', 'curriculum-vitae.docx');
    res.download(setPath);
})


module.exports = router;