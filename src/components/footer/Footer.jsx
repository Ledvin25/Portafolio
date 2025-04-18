import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <h2>CONTACT</h2>
            <div className='email'>
                <img src="./email.webp" alt="Email" />
                <p><a href="mailto:ledvin25@hotmail.com">ledvin25@hotmail.com</a></p>
            </div>
            <div className='location'>
                <img src="./location.webp" alt="Location" />
                <p>Heredia - Costa Rica</p>
            </div>
            <div className='links'>
                <a href="https://www.linkedin.com/in/ledvin25/"><img src="./linkedin.webp" alt="Linkedin" /></a>
                <a href="https://www.github.com/ledvin25/"><img src="./git.webp" alt="GitHub" /></a>
            </div>
            <hr className='separator' />
            <p className='copy'>&copy; {new Date().getFullYear()} Ledvin Leiva. All rights reserved.</p>
        </footer>
    );
};

export default Footer;