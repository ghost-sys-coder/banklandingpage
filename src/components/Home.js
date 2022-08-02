import React from 'react';
import RequestBtn from './RequestBtn';
import desktopBGImage from "../assets/images/image-mockups.png";
import Choose from './Choose';
import LatestArticles from './LatestArticles';
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <div className="header--grid">
      <div className="left--container">
        <div className="left__container--content">
          <h1>Next generation digital banking</h1>
          <p> Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.</p>
        <RequestBtn />
        </div>
      </div>

      <div className="right--container">
        <div className='image'>
        <img src={desktopBGImage} alt="mockup"/>
        </div>
      </div>
    </div>
    <Choose />
    <LatestArticles />
    <Footer />
    </>
  )
}

export default Home