import React from 'react';
import './Tech.css';

const Tech = ({url, alt}) => {
    return (
        <div className='tech-component'>
            <img src={url} alt={alt} />
        </div>
    );
};

export default Tech;