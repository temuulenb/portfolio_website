import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

import {Scroll, Element} from 'react-scroll';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import "animate.css"
import Intro from "./components/Intro";

const slider = (
  <AwesomeSlider animation="cubeAnimation">

    <div>
      <Intro/>
    </div>
   
    <div>
      <AboutMe/>
    </div>
    
  </AwesomeSlider>
);

const App = () =>{
  return (
    <div>
    {/* {slider} */}
    <Element name="intro" className="element">
        <Intro />    
      </Element>
    

    <Element name="header" className="element sticky">
      <Header/>
    </Element>

    <Element name="aboutMe" className="element">
      <AboutMe/>
    </Element>

  </div>
  );
}

export default App;
