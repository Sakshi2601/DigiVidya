import React from "react";
import ProfilePic from "../Assets/about.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
      <p className="primary-subheading">About Us</p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Meet Tech Valkyries, a team of girl engineers revolutionizing education with DigiVidya VR Portal! Join us in shaping a brighter future!
        </p>
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
