import React from "react";
import '/OrganisationInfo.css'


function OrganisationName(props) {
    return (
        <div className='OrganisationName'>
        <div className='OrganisationInfo-name'>
        {props.user.name}
        </div>
    </div>
    );
}