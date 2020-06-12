import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import SearchBarList from './SearchBarList';

import './search-bar.css';

export default function SearchBar() {
    // states
    const [search, setSearch] = useState('');
    const [toggleDisplay, setToggleDisplay] = useState(false);

    // styling
    const style = {
        searchBarDiv: {

        },
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
    const handleChange = (event) => {
        const value = event.target.value;
        setSearch(value);

        if (value.length > 2){
            setToggleDisplay(true)
        }
        else setToggleDisplay(false);
    }

    // functin to handle form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(search);
    }

    // functin to add hover effect to search-bar when input is in focus
    const focusSearchBar = () => {
        const searchBar = document.querySelector('#search-bar-form');
        searchBar.setAttribute('class', 'search-bar-form-focus');
    }

    // functin to remove hover effect from search-bar when input is not in focus
    const blurSearchBar = () => {
        const searchBar = document.querySelector('#search-bar-form');
        console.log('out of focus');
        searchBar.removeAttribute('class', 'search-bar-form-focus');
        searchBar.setAttribute('class', 'search-bar-form');
        setToggleDisplay(false)
    }

    return (

        <div className='search-bar'>
            <form
                style={style.searchBar}
                id='search-bar-form'
                className='search-bar-form '
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    id="search-input"
                    name="search-input"
                    placeholder='Search by author, title...'
                    onChange={handleChange}
                    onFocus={focusSearchBar}
                    onBlur={blurSearchBar}
                    style={style.searchBarInput}
                    className={toggleDisplay ? 'search-active' : 'search-inactive'}
                />

                <FontAwesomeIcon
                    icon={faSearch}
                    style={style.icon}
                    className='search-bar-icon'
                    onClick={handleSubmit}
                />

                <SearchBarList display={toggleDisplay} />
            </form>
        </div>
    )
}