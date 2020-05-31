import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import SearchBarDetails from './SearchBarDetails';

const SearchBarList = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
                <SearchBarDetails suggestion='Dapibus ac facilisis in'/>
                <SearchBarDetails suggestion='Vestibulum at eros'/>
                <SearchBarDetails suggestion='Dapibus ac facilisis in'/>
            </ListGroup>
        </Card>
    )
}

export default SearchBarList;