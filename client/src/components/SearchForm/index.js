import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import './style.css';

class SearchForm extends Component {
    render() {
        return (
            <Form.Group>
                <Form.Control type="text" placeholder="Normal text" />
            </Form.Group>
        )
    }
}

export default SearchForm;