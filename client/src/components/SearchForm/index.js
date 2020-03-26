import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';

class SearchForm extends Component {
    render() {
        return (
            <div>
                <Form.Group>
                    <Form.Control type="text" placeholder="Search Book" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </div>
        )
    }
}

export default SearchForm;