import {Country} from "../Country";
import {FC} from "react";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";

interface CountryCardProps {
    country: Country;
}

const CountryCard: FC<CountryCardProps> = ({country}) => {
    return <Card className='country-card'>
        <Card.Header>{country.name}</Card.Header>
        <Card.Body>
            <ListGroup>
                <ListGroup.Item>
                    <span className='field-name'>Nom (EN)</span>
                    <span className='field-value'>{country.en_name}</span>
                </ListGroup.Item>
                <ListGroupItem>
                    <span className='field-name'>Nom (natif)</span>
                    <span className='field-value'>{country.native_name}</span>
                </ListGroupItem>
                <ListGroupItem>
                    <span className='field-name'>Capitale</span>
                    <span className='field-value'>{country.capital}</span>
                </ListGroupItem>
            </ListGroup>
        </Card.Body>
    </Card>
}
export default CountryCard