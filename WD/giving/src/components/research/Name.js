import React from 'react'

const Name = ({ organisation }) => {
    return (
        <div className='card'>
                    <h1>{organisation.name}</h1>
                    <ul>
                        <li>
                            <strong>Name : </strong>{organisation.name}
                        </li>
                        <li>
                            <strong>Description </strong>{organisation.Description}
                        </li>
                    </ul>
                </div>
    );
}
export default Name;