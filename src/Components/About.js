import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/ash.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">How we are Restoring our culture ?</p>
        <p className="primary-text">
        Let's Revive the Future of Heritages Together!
        </p>
        <p className="primary-text">
          At Heritage Revival, we are committed to restoring our rich cultural heritage through innovative technology and collaborative efforts. By harnessing advanced AI and Generative Engineering (GE), we develop solutions that identify and reconstruct damaged artifacts, artworks, and historical sites. Our approach combines data-driven analysis with creative modeling to bring lost cultural elements back to life, ensuring that future generations can experience and appreciate their heritage.        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch How it works
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
