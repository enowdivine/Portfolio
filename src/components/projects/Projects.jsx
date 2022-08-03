import React from "react";
import "./Projects.css";

const Projects = ({
  projectImage,
  projectName,
  projectDetails,
  tool1,
  tool2,
  tool3,
  tool4,
  tool5,
  github,
  link,
}) => {
  return (
    <div className="projects">
      <div className="project">
        <div className="project-preview">
          <a href="#">{projectImage}</a>
        </div>
        <div className="project-details">
          <span className="featured-project">Featured Project</span>
          <h5 className="mt-2">{projectName}</h5>
          <p className="more-details">{projectDetails}</p>
          <div className="tools">
            <span>{tool1}</span>
            <span>{tool2}</span>
            <span>{tool3}</span>
            <span>{tool4}</span>
            <span>{tool5}</span>
          </div>
          <div className="links mt-2">
            <a href="#"> {github}</a>
            <a href="#">{link}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
