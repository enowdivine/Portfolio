import React from "react";
import "./OtherProjects.css";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

const OtherProjects = () => {
  return (
    <div className="single-card">
      <div className="cardHead">
        <div className="folder-icon">
          <FiGithub size={40} />
        </div>
        <div className="links">
          <span>
            <FiGithub size={20} />
          </span>
          <span>
            <FiExternalLink size={20} />
          </span>
        </div>
      </div>
      <div className="cardBody">
        <div className="cardTitle">Time to Have More Fun</div>
        <div className="cardContent">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
          molestiae quod numquam, suscipit voluptatem beatae! Nostrum saepe,
          libero provident sequi quis, possimus unde ut eveniet aliquid illum
          quibusdam quae facilis?
        </div>
        <div className="cardFooter">
          <span>Next.js</span>
          <span>Next.js</span>
          <span>Next.js</span>
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
