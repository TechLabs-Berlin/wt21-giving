import React from 'react'
import './Textfield1.css'

const Textfield1 = (props) => {
    return (
        <div className='container'>
            <input placeholder={props.title}></input>
        </div>
    );
};

Textfield1.defaultProps = {
    title: 'Name'
}

export default Textfield1;