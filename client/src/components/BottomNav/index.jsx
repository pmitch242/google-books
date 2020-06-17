import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

const BottomNav = () => {
    return (
        <Navbar fixed='bottom'>
            <ul className='nav-links'>
                <li><NavLink to='/' className='home-nav-link'>Home</NavLink></li>
                <li><NavLink to='/search' className='search-nav-link'>Search</NavLink></li>
                <li><NavLink to='/shelf' className='home-nav-link'>Shelf</NavLink></li>
            </ul>
        </Navbar>
    )
}

export default BottomNav;