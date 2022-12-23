/**
 * Fetch countries from API
 */
import {Countries} from "./Country";

/**
 * Small utility function to fetch country list data from the symfony app server
 */
export async function countryFetcher(): Promise<Countries> {
    const url = '/api/v1/countries';
    const result = await fetch(url);
    return await result.json();
}