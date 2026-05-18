import type { Actions } from './$types';
import { redirect } from "@sveltejs/kit";
import { resolve } from "$app/paths";

export const actions = {
    default: async ({request}) => {
        console.log("ASDFSDF");
        redirect(301, resolve("/"));
    }
} satisfies Actions;