import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo';



const Navigation = () => {
    const element = <FontAwesomeIcon icon={faBars} />;
    const elementTimes = <FontAwesomeIcon icon={faTimes} />;

    const [Mobile, setMobile] = useState(false);
    const [isHover, setHover] = useState(false);

    const handleMobileBtn = ()=> {
        return setMobile(!Mobile);
    }

    function handleMouseEnter() {
        setHover(true);
    }
    function handleMouseLeave() {
        setHover(false)
    }

  return (
    <div className='header'>
        <Logo />
        <nav className={Mobile ? "active" : "navbar"} onClick={()=>setMobile(false)}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/careers'>Careers</Link>
        </nav>
        <div className={isHover ? "request btn--hover" : "request"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to='/requests'>Request Invite</Link>
        </div>
        <div className="toggle" id="toggle">
            <i className="icon" onClick={handleMobileBtn} >{Mobile ? elementTimes : element}</i>
        </div>
    </div>
  )
}

export default Navigation