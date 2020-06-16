import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import SearchBarDetails from './SearchBarDetails';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const SearchBarList = ({ searches, display, handleSelect }) => {

    const style = {
        container: {
            backgroundColor: 'transparent',
            border: 'none',
            borderTop: '1px solid rgba(0,0,0,.125)',
            borderRadius: '0',
        },
        hide: {
            display: 'none',
        },
    }

    return (
        <Card
            id='search-bar-list'
            style={
                // toggle display
                display ? style.container : style.hide}
        >
            <ListGroup variant="flush">
                {searches && searches.map(search => {
                    return (
                        <SearchBarDetails
                            search={search}
                            key={search.id}
                            handleSelect={handleSelect}
                        />
                    )
                })}
            </ListGroup>
        </Card>
    )
}

export default SearchBarList;