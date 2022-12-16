import React from 'react';
import './css/header.scss';
import { Outlet, Link } from 'react-router-dom';

const Header = () => {
    return(
        <>
            <nav className=''>
                <div className=''>
                    <div className=''>Gc</div>
                    <span className=''>Garcon</span>
                </div>
            </nav>
        </>
    )
}

export default Header;