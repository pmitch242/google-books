import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import './search-bar.css';


const SearchBarDetails = ({search}) => {

    const style = {
        backgroundColor: 'transparent',
        padding: '10px 0',
        border: 'none',
    }

    return (
        <ListGroup.Item className='search-list-item' style={style}>
            {search.search}
        </ListGroup.Item>
    )
}

export default SearchBarDetails;
