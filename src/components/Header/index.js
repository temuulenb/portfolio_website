import React, {useState} from "react";
import "./style.css";
import * as Scroll from 'react-scroll';
import Icon from '@mdi/react'

const Header = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () =>{
    setIsMenuOpen(!isMenuOpen);

  }

  const scrollTo = (className) => {
    // smooth scolling
    const scroller = Scroll.scroller;
    scroller.scrollTo( className, {
        duration: 1000,
        delay: 0,
        smooth: 'easeInOutQuart'
    })
  }

  const handleMenuItemClick = (dest) =>{
    scrollTo(dest);
    setIsMenuOpen(false);
  }

  return (
    <div className="my-header">
      <div className="my-header-width">
        <div className="header-links">
          <div className="header-link">
            <p onClick = {()=>scrollTo('intro')}>Home</p>
          </div>
          <div className="header-link">
            <p onClick = {()=>scrollTo('aboutMe')}>About</p>
          </div>
          <div className="header-link">
            <p onClick = {()=>scrollTo('projects')}>Portfolio</p>
          </div>
          <div className="header-link">
            <p onClick = {()=>scrollTo('contact')}>Contact</p>
          </div>
        </div>
      </div>
      <div className="mobile-menu-container" onClick={handleMenuClick}>
        <Icon name="bars"/>
      </div>
      <div className={`header-links-mobile ${isMenuOpen ? 'show' : 'hide'}`}>
          <div className="header-link-mobile" onClick = {()=>handleMenuItemClick('intro')}>
            <p>Home</p>
          </div>
          <div className="header-link-mobile" onClick = {()=>handleMenuItemClick('aboutMe')}>
            <p>About</p>
          </div>
          <div className="header-link-mobile" onClick = {()=>handleMenuItemClick('projects')}>
            <p>Portfolio</p>
          </div>
          <div className="header-link-mobile" onClick = {()=>handleMenuItemClick('contact')}>
            <p>Contact</p>
          </div>
      </div>
    </div>
  );
};

export default Header;