import React from 'react';
import './css/header.scss';

const Header = () => {
  return(
    <>
        <nav className="topnav">
            <div className="divbrand">
                <div className="brandimage">MR</div>
                <span className='brandtitle'>Miguel Refuerzo</span>
            </div>
        </nav>
    </>
  )  
}

export default Header;