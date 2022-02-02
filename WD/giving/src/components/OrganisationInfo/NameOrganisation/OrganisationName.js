import React, { useState, useEffect } from 'react';
import Firebase from '../firebase'
import '/OrganisationInfo.css'


const OrganisationName = (props) => {
    const [OrganisationName, setOrganisationName] = useState();
    useEffect(() => {
        const OrganisationNameRef = Firebase.database().ref('giving-e14dd-default-rtdb');
        OrganisationNameRef.on('value', (snapshot) => {
            const OrganisationNames = snapshot.val();
            const OrganisationName = []
            for (let id in OrganisationNames) {
                OrganisationName.push({id, ...OrganisationNames[id] });
            }
            setOrganisationName(OrganisationName);
        })
    }, [])

    return (
        <>
        <div className='OrganisationName'>
                <OrganisationName name={props.name} />
            </div>
            </>
    );
}

OrganisationName.defaultProps = {
    description: 'Organisation'
}
export default OrganisationName