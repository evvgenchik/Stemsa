import nodemailer from "nodemailer";
import { EMAIL_FROM, EMAIL_PASSWORD } from "$env/static/private";

let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
        user: EMAIL_FROM,
        pass: EMAIL_PASSWORD
    },
});

transporter.verify(function (error) {
    if (error) {
        console.error(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

export default transporter;
