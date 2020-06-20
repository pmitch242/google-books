import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

import { fetchBooks } from '../../store/actions/searchActions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

import './search-bar.css';

class SearchBar extends Component {
    // states
    state = {
        search: '',
        toggleDisplay: false,
    }

    // styling
    style = {
        searchBarInput: {
            border: 'none',
            backgroundColor: 'transparent',
            width: '85%',
            paddingRight: '10px',
            paddingLeft: '1px',
            fontSize: '1rem',
        },
        icon: {
            fontSize: '20px',
            float: 'left',
            color: '#1a4cb1',
            clear: 'both',
            marginRight: '10px',
        },
        deleteIcon: {
            fontSize: '22px',
            color: '#1a4cb1',
            clear: 'both',
        },
    }

    // functin to handle form change
    handleChange = (event) => {
        const search = event.target.value;
        this.setState({
            search
        })

        search.length >= 1 ?
            this.setState({ toggleDisplay: true })
            :
            this.setState({ toggleDisplay: false })
    }

    // functin to handle form submit
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.fetchBooks(this.state.search);
        // clear state
        this.setState({ search: '', toggleDisplay: false })
    }

    // function to set state to suggestion
    handleSelect = (search) => {
        this.setState({ search })
    }

    render() {
        const { searches } = this.props;
        
        return (

            <div className='search-bar'>
                <form
                    id='search-bar-form'
                    className='search-bar-form'
                    onSubmit={this.handleSubmit}
                >
                    <FontAwesomeIcon
                        icon={faSearch}
                        style={this.style.icon}
                        className='search-bar-icon'
                    />

                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        style={this.style.icon}
                        className='search-bar-back-icon'
                    />

                    <input
                        type="text"
                        id="search-input"
                        name="search-input"
                        value={this.state.search}
                        placeholder='Search by author, title...'
                        onChange={this.handleChange}
                        style={this.style.searchBarInput}
                        className={this.toggleDisplay ? 'search-active' : 'search-inactive'}
                    />

                    <FontAwesomeIcon
                        icon={faTimes}
                        style={this.style.deleteIcon}
                        className={this.state.toggleDisplay ? 'search-bar-delete-icon show' : 'search-bar-delete-icon'}
                    />
                </form>

            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: (search) => dispatch(fetchBooks(search))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);