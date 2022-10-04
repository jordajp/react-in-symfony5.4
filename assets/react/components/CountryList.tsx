import {FC} from "react";
import {Countries, Country} from "../Country";
import CountryCard from "./CountryCard";
import {Alert, Col, Row} from "react-bootstrap";

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

    return <>
        <Row>
            <Col><Alert variant='success'>{list.length} pays trouvés</Alert></Col>
        </Row>
        <Row>
            <Col>
                <ul id='country-list' >
                    <li>{list.map(c => <CountryCard key={c.name} country={c}/>)}</li>
                </ul>
            </Col>
        </Row>

    </>
}

export default CountryList