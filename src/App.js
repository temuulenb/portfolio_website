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
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const slider = (
  <AwesomeSlider animation="cubeAnimation">

    <div>
      <Intro/>
    </div>
    <div>
      <AboutMe/>
    </div>
    <div>
      <Projects/>
    </div>
    <div>
      <Contact/>
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

    <Element name="projects" className="element">
        <Projects />
    </Element>

    <Element name="contact" className="element">
        <Contact />
    </Element>

    <Footer />
  </div>
  );
}

export default App;
