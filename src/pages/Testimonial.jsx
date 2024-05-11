import React from "react";
import "../styles/Testimonial.css";
import Reviews from "../components/Reviews";
import ContactForm from "../components/ContactUs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const Testimonial = () => {
  return (
    <div className="contactPage">
      <div className="testimonialHeader">
        <h1>TESTIMONIALS</h1>
        <h2>How our clients describe their experience with us.</h2>
      </div>
      <Reviews />
      <div
        className="review-below"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
      >
        <div className="review-below-left">
          <h1
            data-aos="zoom-out"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            Would you like to share your own review?
          </h1>
          <h2
            data-aos="zoom-out"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            Get In Touch
          </h2>
          <div className="details">
            <div
              className="details-content"
              data-aos="zoom-out"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <FontAwesomeIcon icon={faLocation} />
              <a href=".">
                Tower 4 B 905, NX ONE TECHZONE, SECTOR 4, GREATER
                NOIDA WEST, 201308
              </a>
            </div>
            <div
              className="details-content"
              data-aos="zoom-out"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:01204281796">01204281796</a>
            </div>
            <div
              className="details-content"
              data-aos="zoom-out"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <FontAwesomeIcon icon={faMailBulk} />
              <a href="mailto:info@clinics4health.com">
                info@clinics4health.com
              </a>
            </div>
          </div>
        </div>
        <ContactForm title="Say Something About Our Services :" />
      </div>
    </div>
  );
};

export default Testimonial;
