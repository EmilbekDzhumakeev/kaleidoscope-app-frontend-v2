import React from 'react';
import './aboutme.css';

const AboutMe = (props) => {
    return (
        <div className='about-me'>
          <h4>About Me</h4>
          <p>{props.aboutme}</p>
        </div>
    )
}

export default AboutMe;
