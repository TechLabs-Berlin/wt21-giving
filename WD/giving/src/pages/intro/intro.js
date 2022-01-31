import React from 'react';
import Button from '../../components/button/Button';
import {Link} from 'react-router-dom';
import './intro.css';
import { BsCircle, BsFillCircleFill } from 'react-icons/bs';
import GivingLogo from '../../components/logo/pictures/GIVING_V2-svg.svg';
import WorldLogo from '../../components/logo/pictures/Asset4.svg';

const intro = () => {
    return (
        <div className='intropage'>
            <div className='intro-logo'>
                <img src={GivingLogo} style={{ height: 70, width: 250 }} alt="React Logo" />
            </div>
            <div className='WorldLogo'>
                <img src={WorldLogo} style={{ height: 200, width: 450 }} alt="World Logo" />
            </div>
            <h3>Make donating easier</h3>
            <br />
            <p>Donate to trusted <br /> charities Germany-wide <br /> and internationally with <br /> only several clicks</p>
            <br />
            <div className='slider-circles'>
                <div className='single-circle'>
                    <BsFillCircleFill />
                </div>
                <div className='single-circle'>
                    <BsCircle />
                </div>
                <div className='single-circle'>
                    <BsCircle />
                </div>
                <div className='single-circle'>
                    <BsCircle />
                </div>
            </div>
            <div className='introbutton'>
            <Link to={`/signup`}>
                <Button text='Get Started'/>
            </Link>
            </div>
        </div>
    );
};

export default intro;