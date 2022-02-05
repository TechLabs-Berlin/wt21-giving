import React from 'react'

const Name = ({ organisation }) => {
    return (
        <div className='cardname'>
            <h1>{organisation.name}</h1>
            
                <h2>{organisation.Description}</h2>
                </div>
    );
}
export default Name;