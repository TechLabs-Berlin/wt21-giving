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
            <div className='paymenticons'>
                <Paymenticons />
            </div>
            <div className='paymenttextfields'>
                <div className='paymentextfield'>
                    <Textfield2 title='Cardholder Name'/>
                </div>
                <div className='paymentextfield'>
                    <Textfield2 title='Card Number'/>
                </div>
                <div className='paymentcontainer'>
                    <div className='paymentextfield2'>
                        <Textfield2 width='130px' title='Expiry Date'/>
                    </div>
                    <div className='paymentextfield3'>
                        <Textfield2 width='130px' title='CVV'/>
                    </div>
                </div>
            </div>
            <Link to={`/login`}>
                <Button text='Add Payment Method and Sign in'/>
            </Link>
            <Link to={`/login`}>
                <button className='skip'>Skip for now</button>
            </Link>
        </div>
    );
};

export default payment;