import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './style.css';

class BookCard extends Component {

    handleSave = (event) => {
        event.preventDefault();
        console.log('I was hit!');
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <img src={this.props.image} alt='Book Image'/> 
                    </Col>
                    <Col xs={10}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{this.props.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Written By: {this.props.authors}</Card.Subtitle>
                                <Card.Text>{this.props.description}</Card.Text>
                                <Card.Link href={this.props.link}>View</Card.Link>
                                <Card.Link onClick={this.handleSave} className='save-btn'>Save</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default BookCard;