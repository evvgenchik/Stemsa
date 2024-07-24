import type { Actions } from './$types';
import { EMAIL_FROM, EMAIL_TO } from "$env/static/private";
import transporter from "../../lib/emailSetup.server";

export const actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const name = formData.get('name');
            const email = formData.get('email');
            const number = formData.get('number');
            const message = formData.get('message');
            const html = `
                <h1>Stemsa</h1>
                <p>ФИО: ${name}</p>
                <p>Почта: ${email}</p>
                <p>Номер телефона: ${number}</p>
                <p>Сообщение: <pre>${message}</pre></p>
                `;
            const error = !name || !email || !number;

            if (!error) {
                const letter = {
                    from: EMAIL_FROM,
                    to: EMAIL_TO,
                    subject: name,
                    text: name,
                    html: html,
                };
    
                const sendEmail = async (letter) => {
                    await new Promise((resolve, reject) => {
                        transporter.sendMail(letter, (err, info) => {
                            if (err) {
                                console.error(err);
                                reject(err);
                            } else {
                                resolve(info);
                            }
                        });
                    });
                };

                await sendEmail(letter);
            }

            return {
                success: !error,
                error,
                name, 
                email,
                number,
                message
            };
        } catch (error) {
            console.error(error);
        }
    },
} satisfies Actions;
