import React from 'react';
import './OrganisationDescription.css';

const OrganisationDescription = (props) => {
    return (
        <div className='OrganisationDescription'>
            <div className='OrganisationInfo-description'>
            {props.description}
            </div>
        </div>
    );
}

OrganisationDescription.defaultProps = {
    description: 'Organisation'
}
            
export default OrganisationDescription;