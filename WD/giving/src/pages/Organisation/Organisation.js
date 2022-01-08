import React from 'react';
import '/logo.js'
import '/Button1.js'
import '/FotoOrganisation.js'
import OrganisationInfo from '../components/OrganisationInfo/OrganisationInfo';

const organisation = () => {
    return (
        <div>
            <Logo />
            <img className='LogoOrganisation'
            <div className='Organisation'>
                <h1>Organisations Name</h1>
                <h2>Website</h2>
            </div>
            <Button1 />
        </div>
    );
};

export default organisation;