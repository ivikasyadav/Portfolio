import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import './About.css';

function About() {
  const aboutParagraph = {
    text: "I am a passionate developer with a background in computer science and a keen interest in web development. I enjoy working on projects that challenge me and allow me to learn new technologies."
  };

  const educationDetails = [
    { degree: "Bachelor's in Computer Science", institution: "Bhavans College", year: "2025", CGPA: "8.9 (Till 4 sem)" },
    { degree: "HSC", institution: "R.D National college", year: "2021", Percentage: "89%" },
    { degree: "SSC", institution: "Smt. R.N Sheth Vidyamandir", year: "2019", Percentage: "76%" }
  ];

  const skillsList = [
    "JavaScript", 
    "React", 
    "Node.js", 
    "CSS", 
    "HTML", 
    "MongoDB", 
    "C++", 
    "Python", 
    "Java", 
    "SQL"
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      setTimeout(() => {
        if (card) card.classList.add('show');
      }, index * 100); 
    });
  }, []);

  return (
    <Layout>
      <div className="about-container">
        <h1>About Me</h1>
        <p>{aboutParagraph.text}</p>

        <div className="content-wrapper">
          <div className="cards-container">
            <div className="card" ref={el => cardRefs.current[0] = el}>
              <h2>Education</h2>
              <div className="education-list">
                {educationDetails.map((item, index) => (
                  <div className="education-item ski" key={index}>
                    <strong>{item.degree}</strong> at {item.institution} - {item.year}
                    {item.CGPA && <div>CGPA: {item.CGPA}</div>}
                    {item.Percentage && <div>Percentage: {item.Percentage}</div>}
                  </div>
                ))}
              </div>
            </div>

            <div className="card" ref={el => cardRefs.current[1] = el}>
              <h2>Skills</h2>
              <div className="skills-list">
                {skillsList.map((skill, index) => (
                  <div className="skill-item sk" key={index}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
