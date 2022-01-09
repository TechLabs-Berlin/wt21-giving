import React from 'react';
import Logo from '../../components/logo/Logo';
import Button from '../../components/button/Button';
import {Link} from 'react-router-dom';
import './intro.css';
import { BsCircle, BsFillCircleFill, BsFileImage } from 'react-icons/bs';


const intro = () => {
    return (
        <div className='intropage'>
            <Logo />
            <BsFileImage className='fakepicture' size="200px"/>
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
                <Button title='Get Started'/>
            </Link>
        </div>
    );
};

export default intro;