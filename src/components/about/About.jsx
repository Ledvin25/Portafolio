import React from 'react';
import './About.css';
import Tech from './Tech';
import Education from './Education';

const About = () => {
    return (
        <div className='about-container'>
            <div className='about'>
                <h2 className='about-title'>About</h2>
                <p className='about-text'>​As a Software Engineer, I specialize in developing scalable and efficient software solutions, with expertise in backend development, API design, and full-stack web applications. Committed to continuous learning, I thrive in dynamic, collaborative environments.</p>
                <h2 className='tech-title'>Technologies</h2>
                <div className='tech-container'>
                    <Tech url='./tech/html.webp' alt='HTML' />
                    <Tech url='./tech/css.webp' alt='CSS' />
                    <Tech url='./tech/react.webp' alt='React' />
                    <Tech url='./tech/python.webp' alt='Python' />
                    <Tech url='./tech/c++.webp' alt='C++' />
                    <Tech url='./tech/node.webp' alt='Node' />
                    <Tech url='./tech/postgresql.webp' alt='Postgresql' />
                    <Tech url='./tech/mysql.webp' alt='MySQL' />
                    <Tech url='./tech/sql.webp' alt='MS SQL' />
                    <Tech url='./tech/mongo.webp' alt='MongoDB' />
                    <Tech url='./tech/docker.webp' alt='Docker' />
                </div>
                <h2 className='education-title'>Education</h2>
                <div className='education-container'>
                    <Education title='Computer Engineering' where='Tecnologico de Costa Rica' date='2023 - 2026' />
                    <Education title='Physics' where='Universidad de Costa Rica' date='2024 - 2027' />
                    <Education title='Math' where='Universidad de Costa Rica' date='2023 - 2026' />
                </div>
            </div>
        </div>
    );
};

export default About;