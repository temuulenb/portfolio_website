import React from "react";
import "./style.css";
import Particles from "react-tsparticles";
import * as Scroll from 'react-scroll';
import { ParallaxButton } from "react-parallax-button";

const Intro = () => {

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
    <div className="intro">
      <div className="intro-container">
        <Particles className="particle" params={particleOpt} />
        <div className="main-content">
          {/* <img
            src={Image}
            alt="Portfolio picture"
            className="intro-portfolio-image"
          /> */}
          <h1 className="intro-big-name">Hello, I'm <span className = 'intro-name'>Temuulen</span></h1>
          {/* <hr className="intro-line"></hr> */}
          <p className="intro-text">
            I like to build cool things.
          </p>
          <div onClick = {()=> scrollTo('header')}>
            <ParallaxButton
              text="Learn More"  
              parallaxScale={1}  
              backgroundStyle={{  
                background: 'linear-gradient(right, #FF826E, #F36258)',  
                boxShadow: '0 4px 8px rgba(0, 0, 0, .3)'  
              }}  
              textStyle={{  
                padding: '10px',  
                color: 'white',
                fontSize: '1.25rem'  
              }}  
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Intro;


const particleOpt = {
  particles: {
    number: {
      value: 75,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.6,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.6,
      width: 1
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "grab"
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  }
};