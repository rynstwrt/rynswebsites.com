import type { Actions } from './$types';
import { Resend } from "resend";
import { RESENDER_API_KEY } from "$env/static/private";

const resend = new Resend(RESENDER_API_KEY)

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
            const response = await resend.emails.send({
                from: `Contact Form <contactform@rynswebsites.com>`,
                to: `rynstwrt17@gmail.com`,
                subject: `New message from ${name}`,
                replyTo: email,
                html: `<p><strong>Name:</strong> ${name}</p>
                     <p><strong>Email:</strong> ${email}</p>
                     <p><strong>Phone:</strong> ${phone}</p>
                     <p><strong>Services:</strong> ${services}</p>
                     <p><strong>Message:</strong> ${message}</p>`,
            });

            return {success: true, response: response};
        } catch (err) {
            console.error(err);
            return {success: false, error: err};
        }
    }
} satisfies Actions;