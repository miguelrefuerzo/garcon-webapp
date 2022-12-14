import React from 'react';
import './css/CategoryCard.scss';
import Header from './header';
import BreadCrumb from 'react-bootstrap/Breadcrumb';
import Recommended from 'assets/images/recommended.svg';
import MainCourse from '../assets/images/maincourse.svg';
import Drinks from '../assets/images/drinks.svg';
import Desserts from '../assets/images/desserts.svg';
import Appetizer from '../assets/images/appetizer.svg'
import {Link} from 'react-router-dom';

const CategoryCard = () => {
    return(
        <>
            <Header/>
                <div className='subnav'>
                    <BreadCrumb>
                        <BreadCrumb.Item href='/'>Home</BreadCrumb.Item>
                        <BreadCrumb.Item active>/Menu</BreadCrumb.Item>
                    </BreadCrumb>
                </div>
                <div className='home'>
                    <h4>Categories</h4>
                        <div className='row'>
                            <div className='col'>
                                <div className='card'>
                                    <a className='homecard'>
                                    <img src={Recommended} alt="Order"/>
                                    <span>Chef's Recommended</span>
                                    </a>
                                </div>
                            </div>
                            <div className='col'>
                                <Link to={"/Menu/Main"}>
                                    <div className='card'>
                                        <div className='homecard'>
                                            <img src={MainCourse} alt="Main"/>
                                            <span>Main Course</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col'>
                                <div className='card'>
                                    <a className='homecard'>
                                        <img src={Drinks} alt="Main"/>
                                        <span>Drinks</span>
                                    </a>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card'>
                                    <a className='homecard'>
                                        <img src={Desserts} alt="Main"/>
                                        <span>Desserts</span>
                                    </a>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card'>
                                    <a className='homecard'>
                                        <img src={Appetizer} alt="Main"/>
                                        <span>Appetizer</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                </div>
        </>
    )
}

export default CategoryCard;