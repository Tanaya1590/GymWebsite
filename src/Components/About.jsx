import React from "react";
import aboutImg from "../images/about.png";
export const About = () => {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutImg} alt />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          expedita, totam magnam praesentium eligendi blanditiis perspiciatis,
          ex hic natus asperiores placeat molestiae nulla optio! Distinctio
          reiciendis molestiae placeat sequi libero!
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
};
