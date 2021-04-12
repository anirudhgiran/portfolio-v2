import React from 'react'

import './Projects.scss';

import ProjectItem from './ProjectItem';
import ButtonCushion from '../BottomCushion/BottomCushion';

const Projects = () => {
    return (
        <main className="projects">
            <h1 className="project-heading">Projects</h1>
            <section className="projects-list">
                <ProjectItem/>
                <ButtonCushion/>
            </section>
        </main>
    )
}

export default Projects
