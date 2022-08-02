import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const RequestBtn = () => {
  const [isHovering, setHovering] = useState(false);

  function handleMouseEnter() {
    setHovering(true);
  }
  function handleMouseLeave() {
    setHovering(false);
  }
  return (
    <div className={isHovering ? "requestbtn btn--hover" : "requestbtn"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link to='/request'>Request Invite</Link>
    </div>
  )
}

export default RequestBtn;