import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-me-wrapper p-5 container">
      <div className="about-me">
        <h4>About Me</h4>
        <p className="mt-4">
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p>
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients.
        </p>
        <p>
          I also recently launched a course that covers everything you need to
          build a web app with the Spotify API using Node & React.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <div className="skill-lists">
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      </div>
      <div className="profile-image">
        <img src="/logo192.png" alt="" />
      </div>
    </div>
  );
};

export default About;