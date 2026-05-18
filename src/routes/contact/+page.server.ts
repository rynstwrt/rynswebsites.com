import type { Actions } from './$types';

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();

        const name = data.get("name");
        const email = data.get("email");
        const phone = data.get("phone");
        const services = data.get("services");
        const message = data.get("message");

        console.log(name, email, phone, services, message);

        // TODO: Send email on submit

        return {success: true}
    }
} satisfies Actions;