import React, { useState, useEffect } from 'react';
import Firebase from '../firebase'
import '/OrganisationInfo.css'


const OrganisationDescription = (props) => {
    const [OrganisationDescription, setOrganisationDescription] = useState();
    useEffect(() => {
        const OrganisationDescriptionRef = Firebase.database().ref('giving-e14dd-default-rtdb');
        OrganisationDescriptionRef.on('value', (snapshot) => {
            const OrganisationDescriptions = snapshot.val();
            const OrganisationDescription = []
            for (let id in OrganisationDescriptions) {
                OrganisationDescription.push({id, ...OrganisationDescriptions[id] });
            }
            setOrganisationDescription(OrganisationDescription);
        })
    }, [])

    return (
        <>
        <div className='OrganisationDescription'>
                <OrganisationDescription name={props.description} />
            </div>
            </>
    );
}

OrganisationDescription.defaultProps = {
    description: 'Organisation'
}
            
export default OrganisationDescription;