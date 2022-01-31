import React from 'react'
import './payment-icons.css'
import Visa from '../logo/pictures/visa-logo.svg';
import Paypal from '../logo/pictures/PayPal.svg';
import Sepa from '../logo/pictures/sepa.svg';
import { BsCircle, BsFillCircleFill } from 'react-icons/bs';


const paymenticons = () => {
    return (
        <div id='icon-payment'>
            <div className='visa'>
                <img src={Visa} style={{ width: 50, height: 50 }} alt="Visa" />
            </div>
            <div className='paypal'>
                <img src={Paypal} style={{ width: 50, height: 50 }} alt="Paypal" />
            </div>
            <div className='sepa'>
                <img src={Sepa} style={{ width: 50, height: 50 }} alt="Sepa" />
            </div>
        </div>
    );
};

export default paymenticons;