import React from "react";

import {Link} from "react-router-dom";

const ProjectItem = () => {
  const projectList = [
    {
      heading: "Twitter Spoof",
      backdropText: "Twitter Spoof",
      details:
        "A copy of Twitter meant to practice the implementation of multi-user interactions, authentication, updates and image storage.",
      knowMoreURL: "/projects/twitter-spoof"  
    },
    {
        heading: "One Color UI",
        backdropText: "One Color UI",
        details: "An attempt at creating a website using dfferent shades of a color along with black and white.",
        knowMoreURL: "/projects/one-color-ui",
        demoURL: "https://testwebsites-anirudh.github.io/Leica/"
    },
    {
        heading: "TMDB App",
        backdropText: "TMDB App",
        details: "An Angular application that lists the latest movies, tv shows and popular artists. The application uses The Movie DB API to fetch data.",
        knowMoreURL: "/projects/tmdb-app",
        demoURL: "https://tmdb-angular.netlify.app/"
    },
  ];

  return(
      <>
        {projectList.map((item, index)=> <div className="projects-list-item" key={index}>
            <h1 className="counter"><span>{index + 1}</span> of {projectList.length}</h1>
            <h1 className="heading" data-backdrop={item.backdropText}>{item.heading}</h1>
            <p>{item.details}</p>
            <div className="links">
                <Link to={item.knowMoreURL}>Know More</Link>
                {item.demoURL && <a href={item.demoURL}>Demo</a>}
            </div>
        </div> )}
      </>
  );
};

export default ProjectItem;
