import React, { useState } from "react";
import { customerReviews } from "../constants/reviews";
import "../styles/Reviews.css";

const Reviews = () => {
  let rMessage, rName, rLocation;
  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);

  // back to previous review
  const backBtnClick = () => {
    setReview(review <= 0 ? reviewsLength : review - 1);
    handleReviewsUpdation();
  };

  // go to newer review
  const frontBtnClick = () => {
    setReview(review >= reviewsLength ? 0 : review + 1);
    handleReviewsUpdation();
  };

  // update reviews
  const handleReviewsUpdation = () => {
    const reviewMessage = customerReviews[review];
    rName = reviewMessage.name;
    rLocation = reviewMessage.location;
    rMessage = reviewMessage.message;
  };

  // list review on visit
  handleReviewsUpdation();

  return (
    <div className="review-section" id="reviews">
      <section className="shortNote">
        <div className="content">
          <div>
            <h2>
              Comprehensive Revenue Cycle Management solutions that tackle
              physician groups’ biggest challenges.
            </h2>
            <h3>
              Your Clinics4Health Client Services team can help you with
              specific revenue cycle challenges or conduct a complete revenue
              cycle audit to identify inefficiencies in your current
              Clinics4Health systems. Plug into our proprietary intelligent
              automation and expert services capabilities to reduce denials,
              improve revenue capture, boost staff productivity, eliminate
              outdated processes, and put an end to revenue leakage.
            </h3>
          </div>
        </div>
      </section>
      <div className="rw-text-content">
        <p className="rw-text-title">
          More over <span className="rw-text-num">100+ Customers</span>
        </p>

        <p className="rw-text-desc">
          Don't believe us, Check clients word Testimonials
        </p>

        <p
          className="rw-text-format"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <span className="rw-text-quote1">''</span>
          <span className="rw-review">{rMessage}</span>
          <span className="rw-text-quote2">''</span>
        </p>

        <div className="rw-authors">
          <div className="rw-names">
            <p className="rw-reviewer-name">{rName}</p>
            <p className="rw-reviewer-place">{rLocation}</p>
          </div>

          <div className="rw-btns">
            <button
              className="rw-next-btn"
              type="button"
              onClick={backBtnClick}
            >
              ←
            </button>
            <button
              className="rw-next-btn"
              type="button"
              onClick={frontBtnClick}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
