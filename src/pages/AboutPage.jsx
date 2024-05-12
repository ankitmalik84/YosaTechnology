import React from "react";
import "../styles/AboutUs.css";
import AboutHead from "../components/AboutHead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBrain,
  faDollar,
  faHouse,
  faPeopleGroup,
  faPlaneDeparture,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Coursel from "../components/Coursel";
import ContactForm from "../components/ContactUs";

const AboutPage = () => {
  const navigate = useNavigate();
  const handleServiceClick = () => {
    navigate("/solutions");
  };
  return (
    <div className="AboutUs">
      <div className="ab-head">
        <AboutHead />
      </div>
      {/* Your additional content */}
      <div className="ab-main-content">
        <div className="ab-second-left">
          <h2 className="font-semibold">About Us</h2>
          <h1 className="font-poppins font-semibold ss:text-[55px] text-[34px]">
            We Are Leading International Company In The World
          </h1>
          <p>
            Two business partners had a vision of creating holistic services
            that help improve medical billing operations. They started by
            listening to doctors and building a service model around what
            doctors need the most.
          </p>
          <p>
            YosaTechnology is a global service company focused on delivering
            awesome customer experiences for its clients. With our focus on
            continuous innovation, out-of-the-box solutions, and being enablers
            for our customers, we find the missing ‘X’ that propels us as
            partners towards ‘Xponential’ growth.
          </p>
          <button
            className="text-service-btn bg-[#1a8efd]"
            type="button"
            onClick={handleServiceClick}
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
          >
            Our Services
          </button>
        </div>
        <div className="ab-second-right">
          <h2
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
            className="font-semibold"
          >
            Building Trust with Emotions & Innovation
          </h2>
          <div
            className="style-text"
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
          >
            <div className="sub-head">
              <div className="Icon">
                <FontAwesomeIcon icon={faHouse} />
              </div>
              <h2 className="font-semibold">Core Value</h2>
            </div>
            <p>
              At the heart of our ethos lies the pursuit of trust, which we
              endeavor to earn through our unwavering commitment to creativity,
              tangible outcomes, and unwavering quality.
            </p>
          </div>
          <div
            className="style-text"
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
          >
            <div className="sub-head">
              <div className="Icon">
                <FontAwesomeIcon icon={faPlaneDeparture} />
              </div>
              <h2 className="font-semibold">Approach</h2>
            </div>
            <p>
              We adopt a conscientious approach that enables us to achieve
              optimal results through smart decision-making.
            </p>
          </div>
          <div
            className="style-text"
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
          >
            <div className="sub-head">
              <div className="Icon">
                <FontAwesomeIcon icon={faBrain} />
              </div>
              <h2 className="font-semibold">Philosophy</h2>
            </div>
            <p>
              Our focus is on improving our business practices and enhancing our
              engagement with our customers.
            </p>
          </div>
        </div>
      </div>
      <div className="ab-third text-white">
        <div className="ab-points ">
          <div className="icon">
            <FontAwesomeIcon icon={faDollar} />
          </div>
          <div className="sup-content">
            <h3>100%</h3>
            <p>Satisfaction in Services</p>
          </div>
        </div>
        <div className="ab-points">
          <div className="icon">
            <FontAwesomeIcon icon={faPeopleGroup} />
          </div>
          <div className="sup-content">
            <h3>700+</h3>
            <p>Collaegues & Counting</p>
          </div>
        </div>
        <div className="ab-points">
          <div className="icon">
            <FontAwesomeIcon icon={faProjectDiagram} />
          </div>
          <div className="sup-content">
            <h3>100+</h3>
            <p>Successfully Project</p>
          </div>
        </div>
        <div className="ab-points">
          <div className="icon">
            <FontAwesomeIcon icon={faBook} />
          </div>
          <div className="sup-content">
            <h3>17+</h3>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="ab-fifth">
        <Coursel />
      </div>
      <ContactForm
        title="Contact Us YosaTechnology At Below"
        container="form-container1"
        Color="text-white"
      />
    </div>
  );
};
export default AboutPage;
