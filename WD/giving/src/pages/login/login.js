import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import Button from '../../components/button/Button';
import './login.css'

const login = () => {
    return (
        <div>
            <Logo />
            <Button title='Log In' />
        </div>
    );
};

export default login;