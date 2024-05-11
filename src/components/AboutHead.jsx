// AboutUs.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "../styles/AboutHead.css";
import Animate from "../components/Animate";

const AboutHead = () => (
  <div className="AboutUs font-poppins">
    <div className="ab-head-content">
      <div className="animation-css">
        <Animate />
      </div>
      <h3 className="ab-title">
        <span>Our Mission</span>
      </h3>
      <p className="ab-checks ab-check-first">
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> To
        provide quality services at incredible low prices and cost effective
        solutions.
      </p>
      <p className="ab-checks">
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> To
        increase profit ratio for our clients.
      </p>
      <p className="ab-checks">
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> To
        provide continuous 24/7 customer support service.
      </p>
      <p className="ab-checks ">
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> To
        maintain longlasting client relationship.
      </p>
      <p className="ab-checks ab-check-last">
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> To
        serve the healthcare industry the best with our proficiency.
      </p>
    </div>
  </div>
);

export default AboutHead;
