/**
 * Fetch countries from API
 */
import {Countries} from "./Country";

export async function fetcher(): Promise<Countries> {
    const url = '/api/v1/countries';
    const result = await fetch(url);
    return await result.json();
}