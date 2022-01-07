import React from 'react'
import './payment-icons.css'
import { BsCreditCard, BsPaypal, BsBank } from 'react-icons/bs'


const paymenticons = () => {
    return (
        <div id='icon-payment'>
            <div className='creditcard'>
                <BsCreditCard size="30px" />
            </div>
            <div className='paypal'>
                <BsPaypal size="30px" />
            </div>
            <div className='bank'>
                <BsBank size="30px" />
            </div>
        </div>
    );
};

export default paymenticons;