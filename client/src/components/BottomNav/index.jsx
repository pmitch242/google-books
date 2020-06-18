import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faHome } from '@fortawesome/free-solid-svg-icons';

import './bottom-nav.css';

const BottomNav = () => {
    return (
        <Navbar className='bottom-nav' fixed='bottom'>
            <ul className='no-ul nav-links'>
                <li><NavLink exact to='/' className='home-nav-link'>
                    <FontAwesomeIcon className='nav-icon' icon={faHome} />
                    <span>Home</span>
                </NavLink></li>
                <li><NavLink to='/shelf' className='shelf-nav-link'>
                    <FontAwesomeIcon className='nav-icon' icon={faBookOpen} />
                    <span>Shelf</span>
                </NavLink></li>
            </ul>
        </Navbar>
    )
}

export default BottomNav;