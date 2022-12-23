/**
 * Country data schema definition
 */
export type Country = {
    name: string
    en_name: string
    native_name: string
    capital: string
    en_capital: string
    alpha2: string
    alpha3: string
    phone_code: string
}

export type Countries = {
    [label: string]: Country
}