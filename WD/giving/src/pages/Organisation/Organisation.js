import React from 'react';
import Logo from '../../components/logo/Logo';
import Button from '../../components/button/Button';
import '/FotoOrganisation.js';
import OrganisationInfo from '../components/OrganisationInfo/OrganisationInfo';

const organisation = () => {
    return (
        <div>
            <Logo />
            <img className='LogoOrganisation' alt='Logo Organisation'/>
            <div className='Organisation'>
                <h1>Organisations Name</h1>
                <h2>Website</h2>
            </div>
            <Button />
        </div>
    );
};

export default organisation;