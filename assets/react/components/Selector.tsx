import {FC} from "react";
import {Form, FormSelect} from "react-bootstrap";


type SelectorProps = {
    setFilter(filter: string): void
    value: string
}

const Selector: FC<SelectorProps> = ({setFilter, value}) => {
    return <Form id='form-filter'>
        <Form.Group>
            <Form.Label>Filter</Form.Label>
            <Form.Control value={value} onChange={e => setFilter(e.target.value)}></Form.Control>
        </Form.Group>
    </Form>
}

export default Selector;