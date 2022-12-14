import React from 'react';
import Header from '../component/header';
import './css/Home.scss';
import Order from '../assets/images/order.svg';
import Menu from '../assets/images/menu.svg';
import BreadCrumb from 'react-bootstrap/Breadcrumb';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <Header/>
        <div className='subnav'>
          <BreadCrumb>
            <BreadCrumb.Item active>{'Home'}</BreadCrumb.Item>
          </BreadCrumb>
        </div>
        <div className="home">
          <div className='row'>
            <div className='col'>
                <div className='card'>
                    <a className='homecard'>
                    <img src={Order} alt="Order"/>
                    <span>Order Status</span>
                    </a>
                </div>
            </div>
            <div className='col'>
              <Link to={'/Menu'}>
                <div className='card'>
                    <Link to={'/Menu'} className='homecard'>
                        <img src={Menu} alt="Main"/>
                        <span>Menu</span>
                    </Link>
                </div>
              </Link>  
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Home;
  