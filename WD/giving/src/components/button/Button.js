import React from 'react'
import './Button.css'

const Button = ({color, text, width}) => {
    return (
        <div className='container'>
            <button style={{ backgroundColor: color, width: width }} >{text}</button> 
        </div>
    );
};

Button.defaultProps = {
    text: 'Continue',
    color: '#ff9045',
    width: '220px',
}

export default Button;