import React from "react";

import { Link } from "react-router-dom";

const ProjectCard = ({ children, URL, classname }) => {
  return (
    <Link to={URL} className={`projects--cards-card ${classname}`}>
      {children}
    </Link>
  );
};

export default ProjectCard;
