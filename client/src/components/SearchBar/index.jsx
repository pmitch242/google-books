import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import SearchBarList from './SearchBarList';

import './search-bar.css';

export default function SearchBar() {

    const style = {
        searchBarDiv: {

        },
        searchBar: {
            border: 'none',
            borderRadius: '30px',
            backgroundColor: '#f3f5f9',
            padding: '15px 25px',
            boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.12)',
        },
        searchBarInput: {
            border: 'none',
            backgroundColor: 'transparent',
            width: '92%',
        },
        icon: {
            float: 'right',
            color: '#1a4cb1',
            clear: 'both',
        }
    }

    return (

        <div className='search-bar-div'>
            <form style={style.searchBar} className='search-bar'>
                <input type="text" id="search-input" name="search-input" placeholder='Search by author, title...' style={style.searchBarInput} />
                <FontAwesomeIcon icon={faSearch} style={style.icon} className='search-bar-icon' />
                
                <SearchBarList />
            </form>
        </div>
    )
}