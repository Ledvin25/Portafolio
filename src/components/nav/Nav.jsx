import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <section className="nav">
            <div className="container">
                <nav className="nav__container">
                    <ul className="nav__menu">
                        <li className="nav__item">
                            <a href="#hero" className="nav__link">HOME</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">ABOUT ME</a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link">PROJECTS</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">CONTACT</a>   
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Nav;