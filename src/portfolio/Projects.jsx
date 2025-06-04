import React, { useRef, useEffect, useState } from 'react';
import search from './images/search.png'
import todo from './images/to-dolist.jpg'
import note from './images/notemaking.png'
import captcha from './images/captcha.png'
import chatbot from './images/chatbot.png'
import password from './images/pasword.png'
import stopwatch from './images/stopwatch.png'
import portfolio from './images/protfolio.png'
import money from './images/moneycalc.png'

const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} id="projects" className={`projects-section ${isVisible ? 'drop-in' : ''}`}>
      <h2 className="projects-title text-primary">Projects</h2>
      <div className="projects-grid">
      
        <img src={search} alt={`Project`} style={{width:""}} className="project-image" />
         <img src={todo} alt={`Project`} style={{width:""}} className="project-image" />
          <img src={note} alt={`Project`} style={{width:""}} className="project-image" />
          <img src={chatbot} alt={`Project`} style={{width:""}} className="project-image" />
          <img src={captcha} alt={`Project`} style={{width:""}} className="project-image" />
          <img src={password} alt={`Project`} style={{width:""}} className="project-image" />
          <img src={stopwatch} alt={`Project`} style={{width:""}} className="project-image" />
            <img src={portfolio} alt={`Project`} style={{width:""}} className="project-image" />
        <img src={money} alt={`Project`} style={{width:""}} className="project-image" />
      </div>
    </div>
  );
};

export default Projects;