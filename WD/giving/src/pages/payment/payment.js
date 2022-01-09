import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/header/header';
import Button from '../../components/button/Button';
import Paymenticons from '../../components/payment-icons/payment-icons';
import Textfield2 from '../../components/textfield2/Textfield2';
import './payment.css'


const payment = () => {
    return (
        <div className='paymentpage'>
            <Link to={`/signup`}>
                <Header />
            </Link>
            < br />
            <h3>Add Payment Method</h3>
            <Paymenticons />
            <form>
                <label>
                    <Textfield2 title='Cardholder Name'/>
                    <Textfield2 title='Card Number'/>
                    <Textfield2 title='Expiry Date'/>
                    <Textfield2 title='CVV'/>
                </label>
            </form>
            < br />
            <Link to={`/login`}>
                <Button title='Add Payment Method and Sign in'/>
            </Link>
            <Link to={`/login`}>
                <button className='skip'>Skip for now</button>
            </Link>
        </div>
    );
};

export default payment;