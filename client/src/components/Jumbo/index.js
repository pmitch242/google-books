import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './style.css';

class Jumbo extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1> Google Books Search (React)</h1>
                    <p>
                        Search for and Save Book of Interest to Library
                    </p>
                </Container>
            </Jumbotron>
        )
    }
}

export default Jumbo;