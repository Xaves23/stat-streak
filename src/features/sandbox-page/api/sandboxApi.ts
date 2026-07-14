import { createServerFn } from "@tanstack/react-start";
import type { Placeholder } from "../types/placeholder";

export const fetchPlaceholders = createServerFn({method: "GET"}).handler(
    async (): Promise<Placeholder[]> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error(`Failed to fetch placeholder: ${response.statusText}`)
        }

        console.log("WIJFgIHRn tkodrnh oernsss")
        return await response.json();
    } 
)