import React from 'react';

import Socials from './Socials';
import Logo from './Logo'
import FooterLinks from './FooterLinks';
import RequestBtn from './RequestBtn';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer--content">
            <div className='logo--socials'>
                <Logo />
                <Socials />
            </div>
            <div className='footer--links'>
                <FooterLinks
                    toLink='/about'
                    linkText='About Us'
                />
                <FooterLinks 
                    toLink='/contact'
                    linkText='Contact Us'
                />
                <FooterLinks 
                    toLink='/blog'
                    linkText='Blog'
                />
            </div>
            <div className='footer--links'>
                <FooterLinks 
                    toLink='/careers'
                    linkText='Careers'
                />
                <FooterLinks 
                    toLink='/support'
                    linkText='Support'
                />
                <FooterLinks 
                    toLink='/privacy'
                    linkText='Privacy Policy'
                />
            </div>
            <div className='footer--requestbtn'>
                <RequestBtn />
                <p><span>&copy;</span> Easybank All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer