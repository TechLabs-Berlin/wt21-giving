import React from 'react';
import Header from '../../components/header/header'
import Logo from '../../components/logo/Logo';
import Button from '../../components/button/Button';
import '/FotoOrganisation.js';
import SocialFollow from '../../components/SocialFollow/SocialFollow'


const ThankYou = () => {
    return (
        <div>
            <Logo />
            <Header />
            <div className='Thanks'>
            <h1>THANK YOU</h1>
            <img className='LogoOrganisation' alt='Logo Organisation'/>
                </div>
            <Button />
            <SocialFollow />
        </div>
    );
};

export default ThankYou;