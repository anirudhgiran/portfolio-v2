import React from "react";

import ProjectCard from "./ProjectCard";

const ProjectList = () => {
    return (
        <section className="projects">
            <h1>Projects</h1>
            <div className="projects--cards">
                <ProjectCard URL={"/projects/twitter-spoof"}>
                    <h3>Twitter Spoof</h3>
                    <div className="text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptatem, eum sequi? Ex, dolore laudantium!
                        Dolorum esse natus asperiores qui dolore!
                    </div>
                    <div className="dummy-cta">Read More</div>
                </ProjectCard>

                <ProjectCard URL={"/projects/one-color-ui"}>
                    <h3>One Color UI</h3>
                    <div className="text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptatem, eum sequi? Ex, dolore laudantium!
                        Dolorum esse natus asperiores qui dolore!
                    </div>
                    <div className="dummy-cta">Read More</div>
                </ProjectCard>

                <ProjectCard URL={"/projects/simple-shopping-cart"}>
                    <h3>Simple Shopping Cart</h3>
                    <div className="text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptatem, eum sequi? Ex, dolore laudantium!
                        Dolorum esse natus asperiores qui dolore!
                    </div>
                    <div className="dummy-cta">Read More</div>
                </ProjectCard>

                <ProjectCard classname={"more-projects-btn"} URL={"/projects"}>
                    <h3>More Projects</h3>
                </ProjectCard>
            </div>
        </section>
    );
};

export default ProjectList;
