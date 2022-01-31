import React from "react";
import './Footer.css';
import { BsHouse } from 'react-icons/bs'
import { HiSpeakerphone } from 'react-icons/hi'
import { BsPeople } from 'react-icons/bs'

const Footer = (props) => (
  <div className='footer'>
  <div className='footer-container'>
    <div className='Events-logo'>
      <BsPeople size={16}>'Events'</BsPeople>
      <div className='Events-text'>
      <p>Events</p>
      </div>
        </div>
    <div className='Organisations-logo'>
      <BsHouse size={16}>'Organisations'</BsHouse>
      <div className="Organisations-text">
      <p>Organisations</p>
      </div>
        </div>
    <div className='Feeds-logo'>
      <HiSpeakerphone size={16}>'Feed'</HiSpeakerphone>
      <div className="Feeds-text">
          <p>Feed</p>
          </div>
      </div>
  </div>
  </div>
  );

export default Footer;