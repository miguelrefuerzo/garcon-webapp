import React from 'react';
import '../component/css/breadcrumbs.scss';
import '../pages/css/maincourse.scss';
import Adobo from '../assets/images/maincourse/adobo.jpg';
import Sinigang from '../assets/images/maincourse/sinigang.png';
import Bistek from '../assets/images/maincourse/bistek.jpg';
import Sisig from '../assets/images/maincourse/sisig.jpg';
import Kaldereta from '../assets/images/maincourse/kaldereta.jpg';
import FriedRice from '../assets/images/maincourse/fried-rice.jpg';
import Rice from '../assets/images/maincourse/rice.jpg';
import Recommended from '../assets/images/recommended.svg';
import Header from 'component/header';

import BreadCrumb from 'react-bootstrap/Breadcrumb';

import {Link} from 'react-router-dom';

const Adobojpg = {
    backgroundImage: `url(${Adobo})`
};

const Sinigangpng = {
    backgroundImage: `url(${Sinigang})`
};

const Bistekjpg = {
    backgroundImage: `url(${Bistek})`
}

const Sisigjpg = {
    backgroundImage: `url(${Sisig})`
}

const Kalderetajpg = {
    backgroundImage: `url(${Kaldereta})`
}

const FriedRicejpg = {
    backgroundImage: `url(${FriedRice})`
}

const Ricejpg = {
    backgroundImage: `url(${Rice})`
}

const MainCourse = () => {
    return(
        <>
        <Header/>
            <div className='subnav'>
                <ol className='breadcrumb'>
                    <li className='item'>
                        <Link to={"/"}>{"Home"}</Link>
                    </li>
                    <li className='item'>
                        {"/"}
                        <Link to={"/Menu"}>{"Menu"}</Link>
                    </li>
                    <li className='item'>
                        {"/Main"}
                    </li>
                </ol>
            </div>
            <div className='home'>
                <h4>Main</h4>
                <div className='row'>
                    <div className='col'>
                        <Link to={"/"} className='card'>
                            <div className='card-image' style={Adobojpg}>
                                <img src={Recommended} alt='recommended'/>
                                <div className='card-footer'>
                                    <span>Adobong Manok</span>
                                    <small>₱ 200.00 </small>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Link to={"/"} className='card'>
                            <div className='card-image' style={Sinigangpng}>
                                <img/>
                                <div className='card-footer'>
                                    <span>Sinigang na Baboy</span>
                                    <small>₱ 225.00 </small>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Link to={"/"} className='card'>
                            <div className='card-image' style={Bistekjpg}>
                                <img src={Recommended} alt='recommended'/>
                                <div className='card-footer'>
                                    <span>Sinigang na Baboy</span>
                                    <small>₱ 225.00 </small>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Link to={"/"} className='card'>
                            <div className='card-image' style={Sisigjpg}>
                                <img/>
                                <div className='card-footer'>
                                    <span>Sinigang na Baboy</span>
                                    <small>₱ 225.00 </small>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Link to={"/"} className='card'>
                            <div className='card-image' style={Kalderetajpg}>
                                <img src={Recommended} alt='recommended'/>
                                <div className='card-footer'>
                                    <span>Sinigang na Baboy</span>
                                    <small>₱ 225.00 </small>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Link to={"/"} className='card'>
                            <div className='card-image' style={FriedRicejpg}>
                                <img src={Recommended} alt='recommended'/>
                                <div className='card-footer'>
                                    <span>Sinigang na Baboy</span>
                                    <small>₱ 225.00 </small>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Link to={"/"} className='card'>
                            <div className='card-image' style={Ricejpg}>
                                <img/>
                                <div className='card-footer'>
                                    <span>Sinigang na Baboy</span>
                                    <small>₱ 225.00 </small>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainCourse;