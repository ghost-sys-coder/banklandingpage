import React from 'react';
import '../styles/styles.css';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import youtube from '../assets/images/icon-youtube.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';


const Socials = () => {
  return (
    <div className='socials'>
        <div className='social--image'>
            <img src={facebook} alt="facebook" />
        </div>
        <div className='social--image'>
            <img src={youtube} alt="youtube" />
        </div>
        <div className='social--image'>
            <img src={twitter} alt="twitter" />
        </div>
        <div className='social--image'>
            <img src={pinterest} alt="pinterest" />
        </div>
        <div className='social--image'>
            <img src={instagram} alt="instagram" />
        </div>
    </div>
  )
}

export default Socials