
import React, { useState,useEffect,useRef } from 'react'

function Skills(){
const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} id="skills" className={`skills-section ${isVisible ? 'drop-in' : ''}`}>
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-intro">Here are some technologies I’ve worked with:</p>

      <div className="skills-bars">
        <SkillBar skill="Python" percent={80} />
        <SkillBar skill="HTML" percent={90} />
        <SkillBar skill="CSS" percent={60} />
        <SkillBar skill="JavaScript" percent={85} />
        <SkillBar skill="MERN" percent={80} />
        <SkillBar skill="SQL" percent={70} />
      </div>
    </div>
  );
};

const SkillBar = ({ skill, percent }) => (
  <div className="skill">
    <div className="label">
      <span>{skill}</span>
      <span>{percent}%</span>
    </div>
    <div className="progress">
      <div className="progress-bar" style={{ width: `${percent}%` }}></div>
    </div>
  </div>
);

export default Skills