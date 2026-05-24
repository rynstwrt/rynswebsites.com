import type { Actions } from './$types';
import { json } from "@sveltejs/kit";
import { render } from "svelte-email";
import nodemailer, { createTransport } from "nodemailer";
import {
    GOOGLE_EMAIL,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI,
    GOOGLE_REFRESH_TOKEN, GOOGLE_APP_PASSWORD
} from "$env/static/private";
import { google } from "googleapis";

// const oAuth2Client = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);



// const transporter = nodemailer.createTransport({
//     options: {
//
//         host: "smtp.gmail.com",
//         PORT: 587,
//         secure: false,
//         auth: {
//             user: "rynswebsites@gmail.com",
//             pass: GOOGLE_APP_PASSWORD
//         }
//     }
// });

const transporter = nodemailer.createTransport({
    host: "smtp.google.com",
    port: 465,
    secure: false,
    auth: {
        user: GOOGLE_EMAIL,
        pass: GOOGLE_APP_PASSWORD
    }
});


export const actions = {
    default: async ({request}) => {
        const data = await request.formData();

        const name = data.get("name") as string;
        const email = data.get("email") as string;
        const phone = data.get("phone") as string;
        const services = data.get("services") as string;
        const message = data.get("message") as string;

        console.log(name, email, phone, services, message);

        try {
            // oAuth2Client.setCredentials({
            //     refresh_token: GOOGLE_REFRESH_TOKEN
            // });
            //
            // const accessToken = await oAuth2Client.getAccessToken();
            //
            // const transportOptions = {
            //     service: "gmail",
            //     auth: {
            //         type: "OAuth2",
            //         user: GOOGLE_EMAIL,
            //         clientId: GOOGLE_CLIENT_ID,
            //         refreshToken: GOOGLE_REFRESH_TOKEN,
            //         accessToken: accessToken.token
            //     }
            // }
            //
            // const smtpTransport = createTransport(transportOptions);

            // const mailOptions = {
            //     from: {
            //         name: "Ryn's Websites",
            //         address: GOOGLE_EMAIL
            //     },
            //     to: "rynstwrt17@gmail.com",
            //     subject: "My test subject OwO love ya!",
            //     html: `<p><strong>Name:</strong> ${name}</p>
            //           <p><strong>Email:</strong> ${email}</p>
            //           <p><strong>Phone:</strong> ${phone}</p>
            //           <p><strong>Services:</strong> ${services}</p>
            //           <p><strong>Message:</strong> ${message}</p>`,
            // }

            const response = await transporter.sendMail({
                from: `"${name}" <${email}>`,
                to: "rynswebsites@gmail.com",
                subject: "My test subject OwO love ya!",
                text: message
            });

            // const response = await resend.emails.send({
            //     from: `Contact Form <contactform@rynswebsites.com>`,
            //     to: `ryn@rynswebsites.com`,
            //     subject: `New message from ${name}`,
            //     replyTo: email,
            //     html: `<p><strong>Name:</strong> ${name}</p>
            //          <p><strong>Email:</strong> ${email}</p>
            //          <p><strong>Phone:</strong> ${phone}</p>
            //          <p><strong>Services:</strong> ${services}</p>
            //          <p><strong>Message:</strong> ${message}</p>`,
            // });

            // const response = await transporter.sendMail({
            //     from: `Contact Form <contactform@rynswebsites.com>`,
            //     to: `ryn@rynswebsites.com`,
            //     subject: `New message from ${name}`,
            //     html: `<p><strong>Name:</strong> ${name}</p>
            //          <p><strong>Email:</strong> ${email}</p>
            //          <p><strong>Phone:</strong> ${phone}</p>
            //          <p><strong>Services:</strong> ${services}</p>
            //          <p><strong>Message:</strong> ${message}</p>`,
            // });
            console.log(response.response)

            return {success: true, response: response};
        } catch (err) {
            console.error(err);
            return {success: false, error: err};
        }
    }
} satisfies Actions;