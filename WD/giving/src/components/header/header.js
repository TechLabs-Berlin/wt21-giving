import React from 'react'
import './header.css'
import logo from '../logo/pictures/giving-250-white_small.png'
import { IoIosArrowBack } from 'react-icons/io'

const header = () => {
    return (
        <div className='header'>
            <div className='icon-back'>
                <IoIosArrowBack />
            </div>
            <div className='header-logo'>
                <img src={logo} alt='logo'/>
            </div>
        </div>
    );
};

export default header;