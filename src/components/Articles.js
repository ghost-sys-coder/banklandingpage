import React, { useState } from 'react'

const Articles = (props) => {
const [isHovering, setHovering] = useState(false)
  function handleMouseEnter() {
    setHovering(true);
  }

  function handleMouseLeave() {
    setHovering(false);
  }
  return (
    <div className={isHovering ? "article article--hover" : "article"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='image'>
            <img src={props.img} alt={props.alt} />
        </div>
        <div className='article--content'>
            <p className='author'>By {props.author}</p>
            <h4 className='article--heading'>{props.heading}</h4>
            <p className='desc'>{props.description}</p>
        </div>
    </div>
  )
}

export default Articles