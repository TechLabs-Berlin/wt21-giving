import React from 'react'
import './Textfield3.css'

const Textfield3 = ({text}) => {
    return (
        <div>
            <input className='textfield-3' placeholder={text}></input>
        </div>
    );
};

Textfield3.defaultProps = {
    text: 'Name',
}

export default Textfield3;