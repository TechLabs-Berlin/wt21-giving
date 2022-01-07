import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import Button1 from '../../components/button1/Button1';
import './login.css'

const login = () => {
    return (
        <div>
            <Logo />
            <Button1 title='Log In' />
        </div>
    );
};

export default login;