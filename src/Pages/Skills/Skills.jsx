import React from 'react';
import StyledSkills from './StyledSkills';

export default function Skills() {
  return (
    <StyledSkills>
    <div className="wrapper">
        <div className="container">
            <h1 id="title-skill">MY CODING SKILLS</h1>
            <div className="skills">
                <div className="details" id="details-1">
                    <span>HTML</span>
                    <span>90%</span>
                </div>
                <div className="bar">
                    <div id="html-bar"></div>
                </div>
            </div>
            <div className="skills">
                <div className="details" id="details-2">
                    <span>CSS</span>
                    <span>75%</span>
                </div>
                <div className="bar">
                    <div id="css-bar"></div>
                </div>
            </div>
            <div className="skills">
                <div className="details" id="details-3">
                    <span>JavaScript</span>
                    <span>60%</span>
                </div>
                <div className="bar">
                    <div id="js-bar"></div>
                </div>
            </div>
            <div className="skills">
                <div className="details" id="details-4">
                    <span>React.js</span>
                    <span>25%</span>
                </div>
                <div className="bar">
                    <div id="react-bar"></div>
                </div>
            </div>
        </div>
    </div>
    </StyledSkills>
  )
}
