import React from 'react';
import './Logo.css';
import {ReactComponent as ReactLogo} from './pictures/Giving-svg.svg';

const Logo = () => {
    return (
        <div className='Logo'>
            <ReactLogo />
        </div>
    );
};

export default Logo;