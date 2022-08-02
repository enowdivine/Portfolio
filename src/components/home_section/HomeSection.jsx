import React from "react";
import "./HomeSection.css";

const Home = () => {
  return (
    <div className="home-section-wrapper">
      <p className="greetings">Hi, my name is</p>
      <h1 className="themeColor">Enow Divine.</h1>
      <h1 className="themeColor">I build things for the web</h1>
      <p className="brief-description">
        I’m a software engineer specializing in building (and occasionally
        designing) <br /> exceptional digital experiences. Currently, I’m
        focused on building accessible,
        <br /> human-centered products at Upstatement.
      </p>
      <button className="connect">Connect</button>
    </div>
  );
};

export default Home;
