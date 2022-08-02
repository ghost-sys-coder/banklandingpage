import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = (props) => {
  return (
    <div className='link'>
        <Link to={props.toLink}>{props.linkText}</Link>
    </div>
  )
}

export default FooterLink