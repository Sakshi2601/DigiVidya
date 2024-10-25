import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/some-image-removebg-preview.png";
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
        <p className="primary-subheading">What We Are Saying</p>
        <p className="primary-text">
        Let's Shape the Future of Education Together!
        </p>
        <p className="primary-text">
        At DigiVidya, we believe in transforming education through innovative technology. Our platform combines cutting-edge VR experiences with real-world applications, empowering students to master skills and excel in their careers. Join us on a journey to redefine learning!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
