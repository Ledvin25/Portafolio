import React from 'react';
import './Project.css';

const Project = ({url, title, description, visit}) => {
    return (
        <div className='project-component'>
            <img src={url} alt={title} />
            <div className='project-info'>
                <h3 className='project-title'>{title}</h3>
                <p className='project-description'>{description}</p>
            </div>
            <a href={visit} className='btn-visit'>VISIT</a>
        </div>
    );
};

export default Project;