import './css/home.scss';

import Order from '../assets/menu/order.svg';
import Menu from '../assets/menu/menu.svg';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <>
            <div className='gc-home'>
                <Container>
                    <Row>
                        <Col xs={12} sm={6}>
                            <a href="#">
                                <Card>
                                    <Card.Body className='home-card'>
                                        <img className='image' src={Order}/>
                                        <span className='span'>Order Status</span>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Link to={'/Menu'}>
                                <Card>
                                    <Card.Body className='home-card'>
                                        <img className='image' src={Menu}/>
                                        <span className='span'>Menu</span>
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

export default Home;