import React from 'react'

import './Home.scss';

//Component Imports
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import ButtonCushion from '../BottomCushion/BottomCushion';
import AboutMe from './components/AboutMe';

const Home = () => {
    return (
        <main>
            <Hero/>
            <ProjectList/>
            <AboutMe/>
            <ButtonCushion/>
        </main>
    )
}

export default Home;
