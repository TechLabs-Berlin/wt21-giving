import React from 'react';
import './Logo.css';
import {ReactComponent as ReactLogo} from './pictures/GIVING_V2-svg.svg';

const Logo = () => {
    return (
        <div className='Logo'>
            <ReactLogo />
        </div>
    );
};

export default Logo;