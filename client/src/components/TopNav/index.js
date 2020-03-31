import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class TopNav extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Search</Nav.Link>
                        <Nav.Link href="/library">Library</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}