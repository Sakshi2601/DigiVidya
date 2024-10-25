import React from "react";
import Immersive from "../Assets/fea1.jpg";
import ai from "../Assets/fea2.webp";
import industry from "../Assets/fea3.jpg";
import skill from "../Assets/fea4.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: Immersive,
      title: "AI-Driven Restoration Tools",
      text: "Revitalize damaged artifacts and artworks using advanced AI algorithms that analyze and reconstruct missing elements.",
    },
    {
      image: ai,
      title: "Virtual Heritage Tours",
      text: "Explore historical sites and museums through immersive VR experiences that bring cultural heritage to life.",
    },
    {
      image: skill,
      title: "Collaborative Restoration Workshops",
      text: "Engage in hands-on workshops with experts and artists, learning techniques for preserving and restoring cultural artifacts.",
    },
    {
      image: industry,
      title: "Cultural Knowledge Hub",
      text: "Access a wealth of resources, including articles, videos, and case studies, to deepen your understanding of heritage preservation.",
    },
  ];
  return (
    <div id="features" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Features</p>
        <h1 className="primary-heading">Why Chose Us</h1>
        <p className="primary-text">
       Heritage Revival uses AI and Generative Engineering to restore cultural heritage while engaging communities through immersive learning experiences and valuable resources.        </p>
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
