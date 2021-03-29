import React from "react";

import Skills from './Skills';

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

      <Skills />
    </section>
  );
};

export default AboutMe;
