import React from 'react';
import './Portfolio.css';
import Layout from '../components/Layout';
import photo from '../images/gym.webp';
import ecomerce from '../images/ecommerce.jpg';
import pose from '../images/pose.avif';

const Portfolio = () => {
    const projects = [
        {
            title: "GYM Management",
            description: "Developed Gym.IT, a comprehensive gym management platform that enables trainers to add, update, and delete their profiles, assign trainers to members, and upload videos for member access, enhancing engagement and communication within the fitness community.",
            link: "", 
            image: photo 
        },
        {
            title: "E-commerce",
            description: "Developed a robust e-commerce platform that allows users to browse products, add items to their cart, and complete transactions seamlessly. Implemented features for user authentication, product management, and secure payment processing, enhancing the overall shopping experience.",
            link: "", 
            image: ecomerce
        },
        {
            title: "Pose Detection",
            description: "Developed a TensorFlow-based web application that detects various exercises and accurately counts repetitions, enhancing users' workout experience by providing real-time feedback and analysis.",
            link: "", 
            image: pose 
        },
    ];

    const handleLinkClick = (e, link) => {
        if (!link) {
            e.preventDefault();
            alert("This website is not live");
        }
    };

    return (
        <Layout>
            <div className="portfolio-container">
                <h1>My Portfolio</h1>
                
                <p>Welcome to my portfolio! Here are some of my projects:</p>
                <div className="projects-container">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-content">
                                <img src={project.image} alt={`${project.title}`} className="project-image" />
                                <div className="project-details">
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                    <a
                                        href={project.link || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                        onClick={(e) => handleLinkClick(e, project.link)}
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Portfolio;
