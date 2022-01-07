import React from 'react'
import './Textfield2.css'

const Textfield2 = ({title}) => {
    return (
        <div>
            <label className='payment-label'>{title}</label>
            <br />
            <input className='textfield-2'></input>
        </div>
    );
};

Textfield2.defaultProps = {
    title: 'Name'
}

export default Textfield2;