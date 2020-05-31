import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import SearchBarDetails from './SearchBarDetails';

const SearchBarList = () => {

    const style = {
        backgroundColor: 'transparent',
        border: 'none',
        borderTop: '1px solid rgba(0,0,0,.125)',
        borderRadius: '0',
    }

    return (
        <Card style={style}>
            <ListGroup variant="flush">
                <SearchBarDetails suggestion='Dapibus ac facilisis in' />
                <SearchBarDetails suggestion='Vestibulum at eros' />
                <SearchBarDetails suggestion='Dapibus ac facilisis in' />
            </ListGroup>
        </Card>
    )
}

export default SearchBarList;