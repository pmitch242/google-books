import React, { Component } from 'react';
import API from '../../utils/API';
import Container from 'react-bootstrap/Container';
import BookCard from '../../components/BookCard'

class Library extends Component {
    state = {
        library: [],
    }

    componentDidMount() {
        API.getBooks()
            .then(res => {
                this.setState({
                    ...this.state,
                    library: res.data
                })
            })
    };

    componentDidUpdate() {
        API.getBooks()
            .then(res => {
                this.setState({
                    ...this.state,
                    library: res.data
                })
            })
    }

    render() {
        let card = this.state.library.map((book) => {
            return < BookCard
                key={book._id}
                image={book.image}
                title={book.title}
                authors={book.authors}
                option='Delete'
                description={book.description}
                link={book.link}
                id={book._id}

            />
        })
        return (
            <div>
                <Container>
                    {card}
                </Container>
            </div>
        )
    }
}

export default Library;