import React from 'react';
import './Education.css';

const Education = ({title, where, date}) => {
    return (
        <div className='education-component'>
            <p className='title'>
                <span className='bullet'></span> {title}
            </p>
            <p className='where'>{where}</p>
            <p className='date'>{date}</p>
        </div>
    );
};

export default Education;