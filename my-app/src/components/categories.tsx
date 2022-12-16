import React from 'react';
import './css/categories.scss';

import Recommended from '../assets/menu/recommended.svg';
import MainCourse from '../assets/menu/maincourse.svg';
import Appetizer from '../assets/menu/appetizer.svg';
import Desserts from '../assets/menu/desserts.svg';
import Drinks from '../assets/menu/drinks.svg';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import {Link} from 'react-router-dom';

const Categories = () => {
    return(
        <>
            <div className='gc-home'>
                <h4>Categories</h4>
                <Container>
                    <Row>
                        <Col xs={12} sm={6}>
                            <Link to={'#'}>
                                <Card>
                                    <Card.Body className='home-card'>
                                        <img className='image' src={Recommended}/>
                                        <span className='span'>Add All Chef's Recommended</span>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Link to={'/Menu/Main'}>
                                <Card>
                                    <Card.Body className='home-card'>
                                        <img className='image' src={MainCourse}/>
                                        <span className='span'>Main Course</span>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Link to={'#'}>
                                <Card>
                                    <Card.Body className='home-card'>
                                        <img className='image' src={Appetizer}/>
                                        <span className='span'>Appetizers</span>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Link to={'#'}>
                                <Card>
                                    <Card.Body className='home-card'>
                                        <img className='image' src={Desserts}/>
                                        <span className='span'>Desserts</span>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Link to={'#'}>
                                <Card>
                                    <Card.Body className='home-card'>
                                        <img className='image' src={Drinks}/>
                                        <span className='span'>Drinks</span>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Categories;