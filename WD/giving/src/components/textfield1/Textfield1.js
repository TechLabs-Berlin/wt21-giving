import React from 'react'
import './Textfield1.css'

const Textfield1 = ({title}) => {
    return (
        <div>
            <input className='textfield-1' placeholder={title}></input>
        </div>
    );
};

Textfield1.defaultProps = {
    title: 'Name'
}

export default Textfield1;