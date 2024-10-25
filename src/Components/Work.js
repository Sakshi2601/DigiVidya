import React from "react";
import Immersive from "../Assets/fea1.jpg";
import ai from "../Assets/fea2.jpg";
import industry from "../Assets/fea3.jpg";
import skill from "../Assets/fea4.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: Immersive,
      title: "Immersive VR Courses",
      text: "Dive into interactive learning that brings concepts to life.",
    },
    {
      image: ai,
      title: "Personalized Career Guidance",
      text: "Get tailored advice and insights from AI-powered chatbots.",
    },
    {
      image: skill,
      title: "Skill Certifications and Badges",
      text: "Earn recognized certifications that showcase your expertise to employers.",
    },
    {
      image: industry,
      title: "Industry Connections",
      text: "Connect directly with recruiters and land your dream internships.",
    },
  ];
  return (
    <div id="features" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Features</p>
        <h1 className="primary-heading">Why Chose Us</h1>
        <p className="primary-text">
        We offer personalized career guidance, industry-recognized certifications, and direct connections to recruiters, all powered by cutting-edge VR technology.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
