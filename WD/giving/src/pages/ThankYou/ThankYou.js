import React from 'react';
import Header from '../../components/header/header'
import Button from '../../components/button/Button';
import {Link} from 'react-router-dom';
import Textfield3 from '../../components/textfield3/Textfield3'
import Footer from '../../components/Footer/Footer'
import './ThankYou.css'

const image = { uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwamiz.com%2Fchiens%2Fdogue-argentin-161&psig=AOvVaw1x2ZXAC4zTuk5qKpuOzKVB&ust=1644264679677000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNj2qLPx6_UCFQAAAAAdAAAAABAD" };

const ThankYou = () => {
    return (
        <div className='thankyoupage'>
            <Link to={`/explorePage`}>
                <Header />
            </Link>
        <div className='thankyou-picture'>
          <h3>Thank you for considering this organisation in your giving efforts.</h3>
        </div>
        
        <div className='donate-summe'>
          <p> Your one-off donation of € 1,00 has been processed </p>
        </div>
            <div className='Rally'>
            <p> Or rally this donation further by sending this link:</p>
                <Textfield3 text='https://givingapp.com/donations...' />
                <Button text='Rally now'/>
           </div>
<Footer />
        </div>
    );
};

export default ThankYou;