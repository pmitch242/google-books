import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';


const SearchBarDetails = (props) => {
    return <ListGroup.Item>{props.suggestion}</ListGroup.Item>
}

export default SearchBarDetails;
