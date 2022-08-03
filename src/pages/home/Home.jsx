import React from "react";
import "./Home.css";
import NavigationBar from "../../components/navbar/Navbar";
import HomeSection from "../../components/home_section/HomeSection";
import About from "../../components/about_me/About";
import Work from "../../components/work/Work";
import Projects from "../../components/projects/Projects";
import ProjectsTwo from "../../components/projectsTwo/ProjectsTwo";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import OtherProjects from "../../components/other_projects/OtherProjects";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useState } from "react";

const Home = () => {
  const [otherProjects] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className="container">
      <div>
        <NavigationBar />
      </div>
      <div>
        <HomeSection />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Work />
      </div>
      <div className="all-projects">
        <div className="heading">
          <span>03. </span>
          <h5>Some Things I've Built</h5>
        </div>
        <div>
          <Projects
            projectImage={<img src="/projects-images/projects.jpg" alt="" />}
            projectName="Project Name"
            projectDetails="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            blanditiis voluptas error porro sequi, officiis delectus earum
            praesentium placeat a sed eveniet beatae velit magnam quia nostrum
            provident eaque aspernatur."
            tool1="vs code"
            tool2="sublime text"
            github={<FiGithub />}
            link={<FiExternalLink />}
          />
        </div>
        <div>
          <ProjectsTwo
            projectImage={<img src="/projects-images/projects.jpg" alt="" />}
            projectName="Project Name"
            projectDetails="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            blanditiis voluptas error porro sequi, officiis delectus earum
            praesentium placeat a sed eveniet beatae velit magnam quia nostrum
            provident eaque aspernatur."
            tool1="vs code"
            tool2="sublime text"
            github={<FiGithub />}
            link={<FiExternalLink />}
          />
        </div>
        <div>
          <Projects
            projectImage={<img src="/projects-images/projects.jpg" alt="" />}
            projectName="Project Name"
            projectDetails="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            blanditiis voluptas error porro sequi, officiis delectus earum
            praesentium placeat a sed eveniet beatae velit magnam quia nostrum
            provident eaque aspernatur."
            tool1="vs code"
            tool2="sublime text"
            github={<FiGithub />}
            link={<FiExternalLink />}
          />
        </div>
      </div>
      <div>
        <div className="section-title">Other Noteworthy Projects</div>
        <div className="otherProjects">
          {otherProjects.map((_, index) => (
            <OtherProjects
              github={<FiGithub size={20} />}
              link={<FiExternalLink size={20} />}
              projectName="Time to Have More Fun"
              projectDetails="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              molestiae quod numquam, suscipit voluptatem beatae! Nostrum saepe,
              libero provident sequi quis, possimus unde ut eveniet aliquid illum
              quibusdam quae facilis?"
              tool1="vs code"
              tool2="sublime text"
            />
          ))}
        </div>
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
