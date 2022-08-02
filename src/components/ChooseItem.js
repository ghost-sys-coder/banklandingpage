import React from 'react';
import '../styles/styles.css';

const ChooseItem = (props) => {
  return (
    <div className='choose--item'>
        <div className='image'>
            <img src={props.img} alt={props.alt} />
        </div>
        <div className='item--content'>
            <h3>{props.heading}</h3>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default ChooseItem