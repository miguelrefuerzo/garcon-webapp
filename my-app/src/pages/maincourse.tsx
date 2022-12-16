import React from 'react';
import './css/maincourse.scss';

import Adobo from '../assets/maincourse/adobo.jpg';
import Sinigang from '../assets/maincourse/sinigang.png';
import Kaldereta from '../assets/maincourse/kaldereta.jpg';
import Bistek from '../assets/maincourse/bistek.jpg';
import Sisig from '../assets/maincourse/sisig.jpg';
import FriedRice from '../assets/maincourse/fried-rice.jpg';
import Rice from '../assets/maincourse/rice.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import {Link} from 'react-router-dom';

const Adobojpg = {
    backgroundImage: `url(${Adobo})`
};

const MainCourse = () =>{
    return(
    <>
        <div className='gc-home'>
            <h4>Main</h4>
            <Container>
                    <Row>
                        <Col xs={12} sm={6}>
                            <Link to={'#'}>
                                <Card>
                                <div className='menu-card-image' style={Adobojpg}></div>
                                    <Card.Body className='home-card'>
                                        <img className='image' src={Adobo}/>
                                        <span className='span'>Add All Chef's Recommended</span>
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

export default MainCourse;