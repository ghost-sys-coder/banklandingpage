import React from 'react';
import ChooseItem from './ChooseItem';

import OnlineBankingSVG from '../assets/images/icon-online.svg';
import Budgeting from '../assets/images/icon-budgeting.svg';
import Onboarding from '../assets/images/icon-onboarding.svg';
import OpenAPI from '../assets/images/icon-api.svg';

const Choose = () => {
  return (
    <div className='choose'>
        <div className='choose--headings'>
            <h2>Why choose Easybank?</h2>
            <p>We leverage Open Banking to turn your bank account into your financial hub. <br /> Control 
  your finances like never before.</p>
        </div>
        <div className='choose--grid'>
            <ChooseItem  
            img={OnlineBankingSVG}
            alt='online banking'
            heading="Online Banking"
            description="Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world."
            />
            <ChooseItem 
                img={Budgeting}
                alt='simple budgeting'
                heading='Simple Budgeting'
                description='See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits.'
            />
            <ChooseItem 
                img={Onboarding}
                alt='Fast Onboarding'
                heading='Fast Onboarding'
                description='We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.'
            />
            <ChooseItem 
                img={OpenAPI}
                alt='Open API'
                heading='Open API'
                description=' Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.'
            />
        </div>
    </div>
  )
}

export default Choose