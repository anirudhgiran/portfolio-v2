import React from 'react'

import TypeWriter from './TypeWriter';

const Hero = () => {
    return (
        <section className="hero">
            <h3>Hi, I am a</h3>
            <div className={"typewriter"}>
                <h1 className={"placeholder"}>
                    Passionate Photographer
                </h1>
                <TypeWriter/>
            </div>
            <h4>Welcome to my artboard</h4>
            <h4>👇👇👇</h4>
            <p>scroll down</p>
        </section>
    )
}

export default Hero
