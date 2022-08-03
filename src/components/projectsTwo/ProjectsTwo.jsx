import React from "react";
import "./ProjectsTwo.css";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

const ProjectsTwo = () => {
  return (
    <div className="projects">
      <div className="project">
        <div className="project-details2">
          <span className="featured-project2">Featured Project</span>
          <h5 className="mt-2">Project Name</h5>
          <p className="more-details2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            blanditiis voluptas error porro sequi, officiis delectus earum
            praesentium placeat a sed eveniet beatae velit magnam quia nostrum
            provident eaque aspernatur.
          </p>
          <div className="projectTwo-tools">
            <span>VS Code</span>
            <span>VS Code</span>
            <span>VS Code</span>
            <span>VS Code</span>
            <span>VS Code</span>
            <span>VS Code</span>
            <span>VS Code</span>
          </div>
          <div className="projectTwo-links mt-2">
            <a href="#">
              {" "}
              <FiGithub />
            </a>
            <a href="#">
              <FiExternalLink />
            </a>
          </div>
        </div>
        <div className="project-preview">
          <a href="#">
            <img src="/projects-images/projects.jpg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsTwo;
