import React from 'react';
import './Projects.css';
import Project from './Project';

const Projects = () => {
    return (
        <div className='projects'>
            <h2 className='projects-title'>Projects</h2>
            <div className='projects-list'>
                <Project url='./projects/vel.webp' title='JOB APPLY' description='Section built with React, Python and Flask.' visit='https://velspacecr.com/careers'/>
                <Project url='./projects/avant.webp' title='ARCHITEC SITE' description='Website developed with React, React Router.' visit='https://avantglamping.com'/>
            </div>
        </div>
    );
};

export default Projects;