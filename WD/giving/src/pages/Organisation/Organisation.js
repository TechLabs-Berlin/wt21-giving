import React from 'react';
import Header from '../../components/header/header'
import Logo from '../../components/logo/Logo';
import Button from '../../components/button/Button';
import '/FotoOrganisation.js';
import OrganisationInfo from '../components/OrganisationInfo/OrganisationInfo';
import OrganisationName from '../../components/OrganisationInfo/NameOrganisation'

const organisation = () => {
    return (
        <div>
            <Logo />
            <Header />
            <div className='Logo'>
                <img className='LogoOrganisation' alt='Logo Organisation' />
                </div>
            <div className='OrganisationName'>
           <OrganisationName />
                <h2>Website</h2>
                <div className='OrganisationInfo'>
                <OrganisationInfo />
                </div>
            <div className='Button'> 
                    <Button text='Donate' />
                    </div>  
            </div>
            </div>
       
    );
};

export default organisation;