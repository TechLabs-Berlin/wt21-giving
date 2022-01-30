import React from 'react';
import {Link} from 'react-router-dom';
import GivingLogo from '../../components/logo/pictures/GIVING_V2-svg.svg';
import Button from '../../components/button/Button';
import Textfield3 from '../../components/textfield3/Textfield3';
import './login.css'

const login = () => {
    return (
        <div className='loginpage'>
            <div className='login-logo'>
                <img src={GivingLogo} style={{ height: 100, width: 250 }} alt="React Logo" />
            </div>
            <Textfield3 text='Email' />
            <Textfield3 text='Password'/>
            <Link to={`/payment`}>
                <Button text='Log In' width={302}/>
            </Link>
            <div className='password'>
                <p>Forgot password?</p>
            </div>
        </div>
    );
};

export default login;