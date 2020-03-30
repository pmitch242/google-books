import React, { Component } from 'react';
import API from '../../utils/API'
import { Container, Row, Col, Card } from 'react-bootstrap';
import './style.css';

class BookCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {
                title: this.props.title,
                image: this.props.image,
                authors: this.props.authors,
                description: this.props.description,
                link: this.props.link,
            },
            save: 'Save'
        }
    }

    handleSave = () => {
        API.saveBook(this.state.book)
            .then(res => {
                this.setState({
                    save: ''
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <img src={this.props.image} alt='Book Image' />
                    </Col>
                    <Col xs={10}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{this.props.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Written By: {this.props.authors}</Card.Subtitle>
                                <Card.Text>{this.props.description}</Card.Text>
                                <Card.Link href={this.props.link}>View</Card.Link>
                                <Card.Link onClick={this.handleSave} className='save-btn'>{this.state.save}</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default BookCard;