import React from 'react';
import { Form, Button } from 'react-bootstrap';


import './search-bar.css';

export default function SearchBar() {
    return (
        <Form>
            <Form.Group>
                <Form.Control name='search' type="text" placeholder="Search Book" />
            </Form.Group>        
        </Form>
    )
}