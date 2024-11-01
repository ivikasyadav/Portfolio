import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Home.css';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Home = () => {
  const { darkMode } = useTheme(); 
  const name = "Vikas Yadav"; 
  const [displayName, setDisplayName] = useState(""); 
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const addLetter = () => {
      if (index < name.length) {
        setDisplayName((prev) => prev + name[index]); 
        setIndex((prevIndex) => prevIndex + 1);
      }
    };

   
    const intervalId = setInterval(() => {
      addLetter();
    }, 300);

   
    return () => {
      clearInterval(intervalId); 
    };
  }, [index]);
  return (
    <Layout>
      <div className='home'>
        <section className="hero">
          <h1 className='name'>{displayName}</h1>
          <p className='PARA'>Full-Stack Developer | Creative Problem Solver</p>
          
          <button className="cta-button PARA className={`home ${darkMode ? 'dark' : 'light'}`}" ><Link to='/portfolio'>Explore My Work</Link></button>
        </section>
      </div>
    </Layout>
  );
};

export default Home;