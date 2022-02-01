import React from 'react'
import './Button.css'

const Button = ({color, text, width, textcolor}) => {
    return (
        <div className='container'>
            <button style={{ backgroundColor: color, width: width, color: textcolor}} >{text}</button> 
        </div>
    );
};

Button.defaultProps = {
    text: 'Continue',
    color: '#ff9045',
    width: '220px',
    textcolor: 'white',
}

export default Button;