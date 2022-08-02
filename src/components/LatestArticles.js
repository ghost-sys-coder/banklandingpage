import React from 'react';
import Articles from './Articles';
import CurrencyImage from '../assets/images/image-currency.jpg';
import RestaurantImage from '../assets/images/image-restaurant.jpg';
import PlaneImage from '../assets/images/image-plane.jpg';
import ConfettiImage from '../assets/images/image-confetti.jpg';

const LatestArticles = () => {
  return (
    <div className='articles'>
          <div className='articles--heading'>
            <h1>Latest Articles</h1>
          </div>
          <div className='articles--grid'>
            <Articles 
              img={CurrencyImage}
              alt='currency'
              author='Claire Robinson'
              heading='Receive money in any currency with no fees'
              description='The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …'
             />
            <Articles 
              img={RestaurantImage}
              alt='restaurant'
              author='Wilson Hutton'
              heading='Treat yourself without worrying about money'
              description='Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …'
            />
            <Articles 
              img={PlaneImage}
              alt='plane'
              author='Wilson Hutton'
              heading='Take your Easybank card wherever you go'
              description='We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …'
            />
            <Articles 
              img={ConfettiImage}
              alt='confetti'
              author='Claire Robinson'
              heading=' Our invite-only Beta accounts are now live!'
              description='After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...'
            />
          </div>
    </div>
  )
}

export default LatestArticles;