import React from 'react'
import './Button1.css'

const Button1 = (props) => {
    return (
        <div className='container'>
            <button>{props.title}</button> 
        </div>
    );
};

Button1.defaultProps = {
    title: 'Continue'
}

export default Button1;