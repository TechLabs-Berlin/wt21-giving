import React from 'react';
import Header from '../../components/header/header';
import Button from '../../components/button/Button';
import {Link} from 'react-router-dom';
import './donation.css';
import Cats from '../../components/logo/pictures/donation-cats.svg';
import Payment from '../../components/payment-icons/payment-icons';

const donation = () => {
    return (
        <div className='donation-page'>
            <Link to={`/explorePage`}>
                <Header />
            </Link>
            <div className='donation-logo'>
                <img src={Cats} alt="Cats Logo" />
            </div>
            <div className='donation-payment'>
                <p>How would you like to donate?</p>
                <div className='donation-frequency'>
                    <div className='one-off'>
                        <Button color='#2d9cdb' text='One-off' width={120}/>
                    </div>
                    <div className='monthly'>
                        <Button color='white' textcolor='black' text='Monthly' width={120}/>
                    </div>
                </div>
                <div className='donation-amount'>
                    <div className='amount'>
                        <input type='radio' /> 1€
                    </div>
                    <div className='amount'>
                        <input type='radio' /> 10€
                    </div>
                    <div className='amount'>
                        <input type='radio' /> 20€
                    </div>
                </div>
                <p>Choose payment method</p>
                <Payment />
            </div>
            <label className='donation-checkbox'>
                <input type="checkbox" className='donation-anonym'/>
                Donate anonymously
            </label>
            <br />
            <label className='donation-checkbox'>
                <input type="checkbox" className='donation-memory'/>
                Dedicate my donation in memory of someone
            </label>
            <Link to={`/ThankYou`}>
                <Button text='Donate' />
            </Link>
        </div>
    );
};

export default donation;