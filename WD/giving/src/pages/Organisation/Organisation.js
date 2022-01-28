import React from 'react';
import Button from '../../components/button/Button';
import '/FotoOrganisation.js';
import OrganisationInfo from '../components/OrganisationInfo/OrganisationInfo';
import Header from '../../components/header/header'
import OrganisationName from '../../components/OrganisationInfo/NameOrganisation/OrganisationName'
import { Link } from 'react-router-dom';
import SocialFollow from '../../components/SocialFollow/SocialFollow'

const organisation = () => {
    return (
        <div classeName='organisationpage'>
            <div className='header'>
            <Header />
            </div>
            <br />
            <img className='LogoOrganisation' alt='Logo Organisation'/>
            <div className='organisation-name'>
                <text src={OrganisationName} alt="organisation Name" />
                <h2>Website</h2>
                <div className='organisationinfos'>
                <OrganisationInfo />
                </div>
            </div>
<Link to={`/DonationPage`}>
            <Button text='Donate'/>
            </Link>
            <div className='socialfollow'>
                <SocialFollow />
            </div>
            <Link to={`/explorepage`}>
            <Footer />
            </Link>
        </div>
    );
};

export default organisation;