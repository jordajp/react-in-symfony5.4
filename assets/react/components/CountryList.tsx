import {FC} from "react";
import {Countries, Country} from "../Country";
import CountryCard from "./CountryCard";

type CountryListProps = {
    countries: Countries
    filter: string
}
const CountryList: FC<CountryListProps> = ({countries, filter}) => {


    const list: Country[] = [];
    for (let lbl in countries) {
        const re = filter  !== '' ? new RegExp(filter, 'i') : null;
        if (! re || countries[lbl].name.match(re)) {
            list.push(countries[lbl])
        }
    }

    return <ul id='country-list'>
        <li>{list.map(c => <CountryCard key={c.name} country={c}/>)}</li>
    </ul>
}

export default CountryList