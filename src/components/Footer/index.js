import React from "react";
import "./style.css";
import * as Scroll from 'react-scroll';
import { FaAngleDoubleUp, FaEnvelope, FaFile, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {

  const scrollTo = (className) => {
    // smooth scolling
    const scroller = Scroll.scroller;
    scroller.scrollTo( className, {
        duration: 1000,
        delay: 0,
        smooth: 'easeInOutQuart'
    })
  }

  return (
    <div className="my-footer">
      <div className="footer-up" onClick={()=>scrollTo('intro')}>
        <FaAngleDoubleUp size={20}/>
      </div>
      <div className="footer-icons">
        <a className="footer-icon-container"
        href="https://github.com/temuulenb"
        target="_blank"
        rel="noopener noreferrer">
          <FaGithub size={24}/>
        </a>
        <a className="footer-icon-container"
            href="https://www.linkedin.com/in/temuulen-bayasgalan-047366220/"
            target="_blank"
            rel="noopener noreferrer">
          <FaLinkedin size={24}/>
        </a>
        <a className="footer-icon-container"
        href="mailto:temuu1109@gmail.com"
        target="_blank"
        rel="noopener noreferrer">
          <FaEnvelope size={24}/>
        </a>
        <a className="footer-icon-container"
        href="https://drive.google.com/file/d/1Osheor-9ckvIeJMWfKkzA7JxGJAjJnCo/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer">
          <FaFile size={24}/>
        </a>
      </div>
      <div className="footer-name">
        <p>Designed and developed by Temuuulen © {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;