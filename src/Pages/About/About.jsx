import React from 'react';
import StyledAbout from './StyledAbout';
// import './About.css';

export default function About() {
  return (
        <StyledAbout>

    <div id="myself">
        <img src="Images/Myself.jpg" alt="Mayur_Devle"/>
        <figcaption>Hello World!!👋</figcaption>
    </div>

    <div className="intro">
        <p>
            I am currently pursuing my Bachelor of Technology in E&TC from Vishwakarma Institute of Technology,
            Pune.
            I am interested in Web Development; learning new programming languages and seeking exciting
            opportunities
            related to the same. <br/><br/>
            I can't stop learning new things; the more, the better. Coding is like a hobby to me. I believe I am an
            enthusiastic person who genuinely wants to develop the necessary skills and qualities to have a
            successful
            career and future. I keep myself motivated and active and I want to learn from more experienced people.
            I am always curious about things and enjoy learning. I like to solve problems and fix errors. Proficient
            in
            HTML, CSS, JavaScript and Java. Passionate about implementing and launching new projects. <br/><br/>
            I keep my goals and tasks organized.
        </p>
        <p id="resume">
            <a href="http://" target="_blank" rel="noreferrer">
                <button className="cv">Download CV</button>
            </a>
        </p>
    <div/>

</div>
</StyledAbout>
  )
}
