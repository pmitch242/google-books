import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import SearchForm from '../../components/SearchForm'

class Search extends Component {
    render() {
        return (
            <div>
                <Container>
                    <SearchForm />
                </Container>
            </div>
        )
    }
}

export default Search;