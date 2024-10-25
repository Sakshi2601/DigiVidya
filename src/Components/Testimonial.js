import React from "react";
import ProfilePic from "../Assets/about (2).png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div id="testimonials" className="work-section-wrapper">
      <div className="work-section-top">
      <p className="primary-subheading">About Us</p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Meet Heritage Revivalists, a team dedicated to restoring India’s cultural treasures through advanced AI and VR technology! Join us in preserving and celebrating our heritage for future generations!        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Tech Valkyries</h2>
      </div>
    </div>
  );
};

export default Testimonial;
