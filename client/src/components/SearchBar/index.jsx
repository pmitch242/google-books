import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import SearchBarList from './SearchBarList';

import './search-bar.css';

class SerachBar extends Component {
    // states
    state = {
        search: '',
        toggleDisplay: false,
    }

    // styling
    style = {
        searchBar: {
            border: 'none',
            borderRadius: '20px',
            backgroundColor: '#f3f5f9',
            padding: '15px',
        },
        searchBarInput: {
            border: 'none',
            backgroundColor: 'transparent',
            width: '92%',
        },
        icon: {
            fontSize: '20px',
            float: 'right',
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
        console.log(this.state.search);
        // clear state
        this.setState({ search: '', toggleDisplay: false })
    }

    // function to set state to suggestion
    handleSelect = (search) => {
        this.setState({ search })
    }

    // functin to add hover effect to search-bar when input is in focus
    focusSearchBar = () => {
        const searchBar = document.querySelector('#search-bar-form');
        searchBar.setAttribute('class', 'search-bar-form-focus');
    }

    // functin to remove hover effect from search-bar when input is not in focus
    blurSearchBar = () => {
        const searchBar = document.querySelector('#search-bar-form');
        searchBar.removeAttribute('class', 'search-bar-form-focus');
        searchBar.setAttribute('class', 'search-bar-form');
    }
    render() {
        const { searches } = this.props;

        return (

            <div className='search-bar'>
                <NavLink to='/search'>

                    <form
                        style={this.style.searchBar}
                        id='search-bar-form'
                        className='search-bar-form '
                        onSubmit={this.handleSubmit}
                    >

                        <input
                            type="text"
                            id="search-input"
                            name="search-input"
                            value={this.state.search}
                            placeholder='Search by author, title...'
                            onChange={this.handleChange}
                            onFocus={this.focusSearchBar}
                            onBlur={this.blurSearchBar}
                            style={this.style.searchBarInput}
                            className={this.toggleDisplay ? 'search-active' : 'search-inactive'}
                        />

                        <FontAwesomeIcon
                            icon={faSearch}
                            style={this.style.icon}
                            className='search-bar-icon'
                            onClick={this.handleSubmit}
                        />

                        <SearchBarList
                            display={this.state.toggleDisplay}
                            searches={searches}
                            handleSelect={this.handleSelect}
                        />
                    </form>
                </NavLink>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searches: state.search.searches
    }
}

export default connect(mapStateToProps)(SerachBar);