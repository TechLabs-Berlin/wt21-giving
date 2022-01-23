import React from 'react';
import Header from '../../components/header/header'
import Logo from '../../components/logo/Logo';
import Button from '../../components/button/Button';
import '/FotoOrganisation.js';
import SocialFollow from '../../components/SocialFollow/SocialFollow'
import Textfield3 from '../../components/textfield3/Textfield3'

const ThankYou = () => {
    return (
        <div>
            <Logo />
            <Header />
            
            <div className='Thanks'>
            <h1>THANK YOU</h1>
            <img className='LogoOrganisation' alt='Logo Organisation'/>
            </div>
            <Link to={`/Organisation`}>
                <Button text='Back to Organisation Page'/>
            </Link>
            <Button />
            
            <div className='Share'>
            <SocialFollow />
            </div>
            <div className='Rally'>
                <p>Or rally this donation further by sending this link:</p>
                <Textfield3 text='https://givingapp.com/donations...' />
                <Button text='Rally now'/>
           </div>

        </div>
    );
};

export default ThankYou;