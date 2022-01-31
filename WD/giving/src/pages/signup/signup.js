import React from 'react';
import Header from '../../components/header/header';
import Button from '../../components/button/Button';
import Textfield1 from '../../components/textfield1/Textfield1';
import {Link} from 'react-router-dom';
import './signup.css'

const signup = () => {
    return (
        <div className='signup'>
            <Link to={`/`}>
                <Header />
            </Link>
            <div className='signup-container'>
            <form>
                <label>
                    <Textfield1 title='First Name'/>
                    <Textfield1 title='Last Name'/>
                    <Textfield1 title='Street, Number'/>
                    <Textfield1 title='Postal Code'/>
                    <Textfield1 title='City'/>
                    <Textfield1 title='Country'/>
                    <br />
                    <Textfield1 title='Username'/>
                    <Textfield1 title='Email'/>
                    <Textfield1 title='Password'/>
                    <Textfield1 title='Password Confirmation'/>
                </label>
            </form>
            < br />
            <Link to={`/login`}>
                <Button text='Continue' width={250}/>
            </Link>
            </div>
        </div>
    );
};

export default signup;