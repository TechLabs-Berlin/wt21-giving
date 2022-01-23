import React from 'react'
import './Textfield2.css'

const Textfield2 = ({title, width}) => {
    return (
        <div>
            <label className='payment-label'>{title}</label>
            <br />
            <input className='textfield-2' style={{ width }}></input>
        </div>
    );
};

Textfield2.defaultProps = {
    title: 'Name',
    width: '300px',
}

export default Textfield2;