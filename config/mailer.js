require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendWelcomeEmail = async (name, email) => {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to TaskFlow!',
        html: `
            <h2>Welcome to TaskFlow, ${name}!</h2>
            <p>Your account has been successfully created.</p>
            <p>Thank you for joining us.</p>
        `
    });
};

module.exports = sendWelcomeEmail;
