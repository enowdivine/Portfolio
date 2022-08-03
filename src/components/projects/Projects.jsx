import React from "react";
import "./Projects.css";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="projects">
      <div className="project">
        <div className="project-preview">
          <a href="#">
            <img src="/projects-images/projects.jpg" alt="" />
          </a>
        </div>
        <div className="project-details">
          <span className="featured-project">Featured Project</span>
          <h5 className="mt-2">Project Name</h5>
          <p className="more-details">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            blanditiis voluptas error porro sequi, officiis delectus earum
            praesentium placeat a sed eveniet beatae velit magnam quia nostrum
            provident eaque aspernatur.
          </p>
          <div className="tools">
            <span>VS Code</span>
            <span>VS Code</span>
            <span>VS Code</span>
            <span>VS Code</span>
            <span>VS Code</span>
            <span>VS Code</span>
            <span>VS Code</span>
          </div>
          <div className="links mt-2">
            <a href="#">
              {" "}
              <FiGithub />
            </a>
            <a href="#">
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
