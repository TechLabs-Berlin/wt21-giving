import React from 'react';
import Header from '../../components/header/header'
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import OrganisationName from '../../components/OrganisationInfo/NameOrganisation/OrganisationName';

const OrganisationPage = () => {
    return (
        <div classeName='organisationpage'>
            <Header />
            <br />
            <div className='organisation-name'>
                <OrganisationName />
                <text src='www.organisationwebsite.com' alt="organisationWebsite" />
                <div className='organisationinfos'>
                </div>
            </div>    
            <Link to={`/donation`}>
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