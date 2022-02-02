import React from 'react';
import Header from '../../components/header/header'
import '/FotoOrganisation.js';
import OrganisationInfo from '../components/OrganisationInfo/OrganisationInfo';
import OrganisationName from '../../components/OrganisationInfo/NameOrganisation/OrganisationName'
import { Link } from 'react-router-dom';
import SocialFollow from '../../components/SocialFollow/SocialFollow'
import Button from '../../components/button/Button';

const OrganisationPage = () => {

    return (
        <div classeName='organisationpage'>
            <Header />
            <br />
            <img className='FotoOrganisation' alt='LogoOrganisation' />
            <div className='organisation-name'>
                <OrganisationName />
                <text src='www.organisationwebsite.com' alt="organisationWebsite" />
                <div className='organisationinfos'>
                    <OrganisationInfo />
                </div>
            </div>
        
            <Link to={`/DonationPage`}>
                <Button text='Donate' />
            </Link>
            <div className='socialfollow'>
                <SocialFollow />
            </div>
            <Link to={`/explorepage`}>
                <Footer />
            </Link>
        </div>
    );
}

export default OrganisationPage;