import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';
import API from '../../utils/API'

class SearchForm extends Component {
    state = {
        results: [],
        search: ''
    }

    handleInputChange = (event) => {
        this.setState({ search: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        API.google(this.state.search)
            .then(res => {
                this.setState({
                    search: '',
                    results: res.data.items,
                })
                console.log(this.state);
            })
    }

    render() {
        const className = {
            button: 'button'
        }
        return (
            <Form>
                <Form.Group>
                    <Form.Control value={this.state.search} onChange={this.handleInputChange} name='search' type="text" placeholder="Search Book" />
                </Form.Group>
                <Button disabled={!this.state.search} onClick={this.handleSubmit} className={className.button} variant="primary" type="submit">
                    Search
                </Button>
            </Form>
        )
    }
}

export default SearchForm;