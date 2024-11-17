import React from "react";
import "./style.css";
import Icon from "@mdi/react";
import Temuulen from "../../images/temuulen.jpg"
import Tilt from 'react-parallax-tilt';
import { mdiSpeedometer, mdiCellphoneLink, mdiLightbulbOnOutline, mdiRocketLaunchOutline } from '@mdi/js';


const AboutMe = () => {
  return (
    <div className="about-me" data-uk-scrollspy="target: > *; cls:animated uk-animation-slide-bottom-medium; delay: 300;">
      <div className="header">
        <p className="ABOUT-ME">ABOUT</p>
        <hr className="line"></hr>
      </div>
      <br></br>
      <div className="about-me-wrapper">
        <div className = 'about-me-section'>
          <p>Hello, I'm Temuulen. I'm a <span className = 'orange'>full stack developer</span> based in <span className = 'orange'>Vancouver, British Columbia</span>.</p>
          <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. Also, I love things that are built to work reliably, whilst at the same time charm its users with its <span className = 'orange'>aesthetic look</span> and <span className = 'orange'>ease of use</span>.</p>
          <p>Here are a few technologies I've been working with recently:</p>

          <div className = 'about-me-skills'>
            <div className = 'about-me-skill skill-1'>
              <p>▹ Typescript</p>
            </div>

            <div className = 'about-me-skill skill-1'>
              <p>▹ Javascript</p>
            </div>

            <div className = 'about-me-skill skill-2'>
              <p>▹ React</p>
            </div>

            <div className = 'about-me-skill skill-3'>
              <p>▹ Node.js</p>
            </div>

            <div className = 'about-me-skill skill-4'>
              <p>▹ Next.js</p>
            </div>

            <div className = 'about-me-skill skill-5'>
              <p>▹ Firebase</p>
            </div>

            <div className = 'about-me-skill skill-6'>
              <p>▹ Figma</p>
            </div>
          </div>
        </div>

        <div className = 'about-me-image'>
          <Tilt parallaxScale={0.25}>
            <img src = {Temuulen} alt="temuulen" className = "temuulen-image"/>
          </Tilt>
        </div>

        {/* <div className="skills">
          <h1 className="big-text">SKILLS</h1>
          <p className="less-important-text" id="skills-header">
            Front-End Development:
          </p>
          <p className="important-text">
            HTML5, CSS3/Flexbox/Grid, Sass, Javascript/ES6, Typescript, AJAX,
            jQuery, React.js, Gatsby.js, React Native, Redux, Jest
          </p>
          <br className="break"></br>

          <p className="less-important-text" id="skills-header">
            Back-End Development:
          </p>
          <p className="important-text">
            Node.js, Express.js, Java, C++, MySQL, MongoDB, Firebase, Docker,
            Postman, Strapi
          </p>

          <br className="break"></br>
          <p className="less-important-text" id="skills-header">
            Deployment:
          </p>
          <p className="important-text">
            Heroku, AWS S3, CloudFront, Google Cloud Platform, Git, Netlify
          </p>
          <br></br>
        </div> */}
      </div>

      <div className="about-me-skill-icons">
        <div className="about-me-skill-icons-row">
          <div className="about-me-skill-icon">
            <div className="hexagon">
            <Icon path={mdiSpeedometer}
                  size={2}
                  color="white"
                  rotate={30}
            />
            </div>
            <h3>Fast</h3>
            <p>Lag free interaction is my highest priority.</p>
          </div>
          <div className="about-me-skill-icon">
          <div className="hexagon">
            <Icon path={mdiCellphoneLink}
                  size={2}
                  color="white"
                  rotate={30}
            />
            </div>
            <h3>Responsive</h3>
            <p>My layouts will work on any device, big or small.</p>
          </div>
        </div>

        <div className="about-me-skill-icons-row">
          <div className="about-me-skill-icon">
          <div className="hexagon">
            <Icon path={mdiLightbulbOnOutline}
                  size={2}
                  color="white"
                  rotate={30}
            />
            </div>
            <h3>Intuitive</h3>
            <p>Strong preference for easy to use, intuitive UX/UI.</p>
          </div>
          <div className="about-me-skill-icon">
          <div className="hexagon">
            <Icon path={mdiRocketLaunchOutline}
                  size={2}
                  color="white"
                  rotate={30}
            />
            </div>
            <h3>Dynamic</h3>
            <p>I love making pages come to life.</p>
          </div>
        </div>
      </div>
         
    </div>
  );
};

export default AboutMe;