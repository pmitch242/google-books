import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Form, Button } from 'react-bootstrap';
import './style.css'
import BookCard from '../../components/BookCard'
import API from '../../utils/API'


class Search extends Component {
    state = {
        results: [],
        search: '',
        lastSearch: localStorage.getItem('lastSearch')
    }

    componentDidMount(){
        this.getBooks(this.state.lastSearch);
    }

    handleInputChange = (event) => {
        this.setState({ search: event.target.value })
    }

    getBooks = (search) =>{
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
            key ={book.id}
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
            <div>
                <Container>
                    <Form>
                        <Form.Group>
                            <Form.Control value={this.state.search} onChange={this.handleInputChange} name='search' type="text" placeholder="Search Book" />
                        </Form.Group>
                        <Button disabled={!this.state.search} onClick={this.handleSubmit} className={className.button} variant="primary" type="submit">
                            Search
                        </Button>
                    </Form>
                    {card}
                </Container>
            </div>
        )
    }
}

export default Search;