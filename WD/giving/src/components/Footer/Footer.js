import React from "react";
import './Footer.css';
import { BsHouse } from 'react-icons/io'
import { HiSpeakerphone } from 'react-icons'
import { BsPeople } from 'react-icons'

const Footer = () => (
  <div className="footer">
        <div className='Events'>
        <BsPeople size={16}>'Events'</BsPeople>
        </div>
        <div className='Organisations'>
            <BsHouse size={16}>'Organisations'</BsHouse>
        </div>
        <div className='Feeds'>
            <HiSpeakerphone size={16}>'Feed'</HiSpeakerphone>
        </div>
  </div>
);

export default Footer;