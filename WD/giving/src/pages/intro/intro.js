import React from 'react';
import Logo from '../../components/logo/Logo';
import Button from '../../components/button/Button';
import {Link} from 'react-router-dom';
import './intro.css';
import { BsCircle, BsFillCircleFill, BsFileImage } from 'react-icons/bs';
import GivingLogo from '../../components/logo/pictures/GIVING_V2-svg.svg';

const intro = () => {
    return (
        <div className='intropage'>
            <div className='intro-logo'>
                <img src={GivingLogo} style={{ height: 100, width: 250 }} alt="React Logo" />
            </div>
            <BsFileImage className='fakepicture' size="350px"/>
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
            <Link to={`/signup`}>
                <Button text='Get Started'/>
            </Link>
        </div>
    );
};

export default intro;