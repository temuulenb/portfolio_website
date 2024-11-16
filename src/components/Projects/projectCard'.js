import React, { useState, useEffect } from 'react';
import './style.css';
import Modal from 'react-modal';

const ProjectCard = (props) =>{

  const { 
    title, 
    tech = [], 
    description, 
    coverImg, 
    primaryColor, 
    secondaryColor ,
    projectOwner,
    year,
    role,
    projectUrl
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () =>{
    setIsOpen(true);
  }

  const closeModal = () =>{
    setIsOpen(false);
  }

  return(
          <div className="project-card">
            <div className="card-front">
              <div className="card-title" style={{backgroundImage: `linear-gradient(to bottom, ${primaryColor}, ${secondaryColor})`}}>
                <h2>
                  <span className="card-title-text">{title}</span>
                </h2>
                <img className="project-card-cover-image" src={coverImg} alt='project-coverimage'/>

              </div>
              <div className="card-technologies">
                <ul>  
                  {tech.map(item=>{
                    return(
                      <>
                      <li>{item.text}</li>
                      {item.id !== 4 && <hr className="card-technologies-line"></hr>}
                      </>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="card-back" style={{backgroundImage: `linear-gradient(to bottom, ${primaryColor}, ${secondaryColor})`}}>
              <div className="card-description">
                <p>{description}</p>
              </div>
              <div className="card-button-big">
                <a
                  // href="https://apps.apple.com/us/app/verbamate/id1497272076"
                  target="_blank"
                >
                  <button className="card-button" onClick={openModal}>More Info</button>
                </a>
              </div>
            </div>
            <Modal
              isOpen={isOpen}
              onRequestClose={closeModal}
              className="Modal animate__animated animate__slideInLeft"
              style={{overlay: {background: 'rgba(0,0,0,.4)'}, content: {border: 'none'}}}
            >
              <div className="modal-header">
                <h2 className="modal-title">{title}</h2>
                <button className="modal-close-button" onClick={closeModal}>X</button>
              </div>
              <div className="modal-body">
                <p className="modal-desc">{description}</p>
                <p className="modal-text"><span className="modal-span">Project Owner: </span>{projectOwner}</p>
                <p className="modal-text"><span className="modal-span">Role: </span>{role}</p>
                <p className="modal-text"><span className="modal-span">Year: </span>{year}</p>
              </div>         
              <div className="modal-buttons">
                <button onClick={() => window.open(projectUrl)}>Visit Project</button>
              </div>
            </Modal>
          </div>
  )
}

export default ProjectCard;