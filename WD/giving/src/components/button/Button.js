import React from 'react'
import './Button.css'

const Button = ({color, text}) => {
    return (
        <div className='container'>
            <button style={{ backgroundColor: color }} >{text}</button> 
        </div>
    );
};

Button.defaultProps = {
    text: 'Continue',
    color: 'grey',
}

export default Button;