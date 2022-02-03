import React from 'react';
import Header from '../../components/header/header'
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

const OrganisationPage = () => {

    return (
        <div classeName='organisationpage'>
            <Header />
            <br />
            <img className='FotoOrganisation' alt='LogoOrganisation' />
            <div className='organisation-name'>
                <text src='www.organisationwebsite.com' alt="organisationWebsite" />
                <div className='organisationinfos'>
                </div>
            </div>
        
            <Link to={`/DonationPage`}>
                <Button text='Donate' />
            </Link>
            <div className='socialfollow'>
            </div>
            <Link to={`/explorepage`}>
            </Link>
        </div>
    );
}

export default OrganisationPage;