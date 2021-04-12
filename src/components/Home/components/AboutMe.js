import React from "react";

import Skills from './Skills';

//Resume Import
import Resume from '../../../assets/docs/Resume 2021 - Anirudh Giran.pdf'

const AboutMe = () => {
  return (
    <section className={"about"}>
      <h1>About Me</h1>
      <p>
        Hi! I am Anirudh Giran, <i>Computer
        Systems Technician - Software Engineering Program</i> graduate from Sheridan College
        with 3.95/4 GPA. I
        am a focused, quick learning web developer and programmer. I am
        passionate about programming and photography. I spend most of my time
        learning new things. In my leisure time , I love making websites. So far
        I have worked on 1 freelance project. <br/><br/>
      </p>
      <a href={Resume} download className="download-resume-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z"/></svg>
        Download Resume</a>
      <Skills />
    </section>
  );
};

export default AboutMe;
