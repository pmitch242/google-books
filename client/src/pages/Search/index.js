import React, { Component } from 'react';

import API from '../../utils/API';

import './style.css';


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
        // let card = this.state.results.map((book) => {
        //     let info = book.volumeInfo;
        //     return < BookCard
        //         key={book.id}
        //         id={book.id}
        //         image={info.imageLinks.thumbnail}
        //         title={info.title}
        //         authors={info.authors}
        //         option='Save'
        //         description={
        //             !book.searchInfo?.textSnippet ?
        //                 ("No description provided...") :
        //                 (book.searchInfo.textSnippet)
        //         }
        //         link={info.infoLink}
        //     />
        // })

        return (
            <div>
            </div>
        )
    }
}

export default Search;