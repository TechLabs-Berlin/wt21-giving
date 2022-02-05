import React, { useState, useEffect } from 'react';
import firebase from '../../../Firebase'


const OrganisationName = (props) => {
    const [NameList, setNameList] = useState()
    useEffect(() => {
        const dbRef = firebase.database().ref();
        const ref = dbRef.child('NameList');
        ref.on('value', (snapshot) => {
          const snapshotValue = snapshot.val()
          console.log(snapshotValue)
          setNameList(snapshotValue)(Object.values(snapshotValue))
        });
      } , [])
    

    return (
        <div className='OrganisationName'>
                <OrganisationName name={props.NameList} />
            </div>
    );
}

OrganisationName.defaultProps = {
    description: 'Organisation'
}
export default OrganisationName