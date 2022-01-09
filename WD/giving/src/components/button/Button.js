import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <div className='container'>
            <button>{props.title}</button> 
        </div>
    );
};

Button.defaultProps = {
    title: 'Continue'
}

export default Button;