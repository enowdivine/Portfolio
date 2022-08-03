import React from "react";
import "./OtherProjects.css";
import { FiGithub } from "react-icons/fi";

const OtherProjects = ({
  github,
  link,
  projectName,
  projectDetails,
  tool1,
  tool2,
  tool3,
  tool4,
  tool5,
}) => {
  return (
    <a href="#" className="single-card">
      <div className="cardHead">
        <div className="folder-icon">
          <FiGithub size={40} />
        </div>
        <div className="links">
          <a href="#">
            {" "}
            <span>{github}</span>
          </a>
          <a href="#">
            <span>{link}</span>
          </a>
        </div>
      </div>
      <div className="cardBody">
        <div className="cardTitle">{projectName}</div>
        <div className="cardContent">{projectDetails}</div>
        <div className="cardFooter">
          <span>{tool1}</span>
          <span>{tool2}</span>
          <span>{tool3}</span>
          <span>{tool4}</span>
          <span>{tool5}</span>
        </div>
      </div>
    </a>
  );
};

export default OtherProjects;
