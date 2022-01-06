import React from 'react';
import Logo from '../../components/logo/Logo';
import Button1 from '../../components/button1/Button1';
import Textfield1 from '../../components/textfield1/Textfield1';

const signup = () => {
    return (
        <div>
            <Logo />
            <form>
                <label>
                    <Textfield1 title='First Name'/>
                    <Textfield1 title='Last Name'/>
                    <Textfield1 title='Street, Number'/>
                    <Textfield1 title='Postal Code'/>
                    <Textfield1 title='City'/>
                    <Textfield1 title='Country'/>
                    <br />
                    <br />
                    <Textfield1 title='Username'/>
                    <Textfield1 title='Email'/>
                    <Textfield1 title='Password'/>
                    <Textfield1 title='Password Confirmation'/>
                </label>
            </form>
            <Button1 />
        </div>
    );
};

export default signup;