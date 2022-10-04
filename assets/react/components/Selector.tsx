import {FC} from "react";
import {Form, Row} from "react-bootstrap";


type SelectorProps = {
    setFilter(filter: string): void
    value: string
}

const Selector: FC<SelectorProps> = ({setFilter, value}) => {
    return <Row>
        <Form id='form-filter'>
            <Form.Group controlId='form-filter-input'>
                <Form.Label>Filter la liste</Form.Label>
                <Form.Control value={value}
                              placeholder='Entrez une partie du nom du pays'
                              onChange={e => setFilter(e.target.value)}>

                </Form.Control>
            </Form.Group>
        </Form>
    </Row>
}

export default Selector;