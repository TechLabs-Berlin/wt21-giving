import React from 'react'
import '.OrganisationDescription.css'

const OrganisationDescription = () => {
    return (
<div className='OrganisationDescription'>
<div className='OrganisationInfo-description'>
{props.user.description}
</div>
);
}
            
export default OrganisationDescription;