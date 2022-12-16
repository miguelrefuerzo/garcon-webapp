import React from 'react';
import './css/header.scss';
import { Outlet, Link } from 'react-router-dom';

const Header = () => {
    return(
        <>
            <nav className='navbar'>
                <div className='flex items'>
                    <div className='brand'>Gc</div>
                    <span className='title'>Garcon</span>
                </div>
            </nav>
            <div id='outlet'>
                <Outlet/>
            </div>
        </>
    )
}

export default Header;