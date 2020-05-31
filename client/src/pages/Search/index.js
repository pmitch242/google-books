import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import SearchBar from '../../components/search/SearchBar'
import BookCard from '../../components/BookCard'

import API from '../../utils/API'

import './style.css'


class Search extends Component {
    state = {
        results: [],
        search: '',
        lastSearch: localStorage.getItem('lastSearch')
    }

    componentDidMount() {
        this.getBooks(this.state.lastSearch);
    }

    handleInputChange = (event) => {
        this.setState({ search: event.target.value })
    }

    getBooks = (search) => {
        API.google(search)
            .then(res => {
                this.setState({
                    search: '',
                    results: res.data.items,
                })
            })
    }

    handleSubmit = event => {
        event.preventDefault();
        localStorage.setItem("lastSearch", this.state.search);
        this.getBooks(this.state.search);
    }

    render() {
        const className = {
            button: 'button'
        }
        let card = this.state.results.map((book) => {
            let info = book.volumeInfo;
            return < BookCard
                key={book.id}
                id={book.id}
                image={info.imageLinks.thumbnail}
                title={info.title}
                authors={info.authors}
                option='Save'
                description={
                    !book.searchInfo?.textSnippet ?
                        ("No description provided...") :
                        (book.searchInfo.textSnippet)
                }
                link={info.infoLink}
            />
        })

        return (
            <Container>
                <SearchBar />
                {/* {card} */}
            </Container>
        )
    }
}

export default Search;