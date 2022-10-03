import {FC, useEffect, useState} from "react";
import {fetcher} from "../fetcher";
import {Countries} from "../Country";
import {Spinner} from "react-bootstrap";
import CountryList from "./CountryList";
import Selector from "./Selector";


const App: FC = () => {
    const [countries, setCountries] = useState<Countries | null>(null);
    const [filter, setFilter] = useState<string>('')

    useEffect(() => {
        const getCountries =  async () => {
            const countries  = await fetcher()
            setCountries(countries);
        }
        getCountries();
    },  [])

    if (! countries) {
        return <>
            <Spinner animation={'border'} role={'status'}>
                <span className="visually-hidden">Chargement...</span>
            </Spinner>
        </>
    }

    return <>
        <Selector setFilter={setFilter} value={filter}/>
        <CountryList countries={countries} filter={filter}/>
    </>
}

export default App
