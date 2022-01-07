import React from 'react';
import Logo from '../../components/logo/Logo';
import Button1 from '../../components/button1/Button1';
import {Link} from 'react-router-dom';

const intro = () => {
    return (
        <div>
            <Logo />
            <Link to={`/signup`}>
                <Button1 title='Get Started'/>
            </Link>
        </div>
    );
};

export default intro;