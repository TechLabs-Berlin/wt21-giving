import React from 'react'
import logo from '../logo/pictures/giving-250-white_small.png'
import './Logo.css'

const Logo = () => {
    return (
        <div className='Logo'>
            <img src={logo} alt='logo'/>
        </div>
    );
};

export default Logo;