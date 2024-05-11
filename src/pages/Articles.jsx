import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/A1.jpeg";
import img2 from "../assets/A2.jpg";
import "../styles/Articles.css";

const Articles = () => {
  const navigate = useNavigate();

  const handleArticleClick = (articleId) => {
    navigate(`/article${articleId}`);
  };

  return (
    <div className="article-cover">
      <div className="article-main">
        <div className="article-1" onClick={() => handleArticleClick(1)}>
          <div
            className="article-img"
            data-aos="zoom"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
          >
            <img src={img1} alt="img1" />
          </div>
          <div className="article-content">
            <h1
              data-aos="zoom"
              data-aos-duration="300"
              data-aos-easing="ease-in-out"
            >
              Medical Billing & Coding In India
            </h1>
            <p
              data-aos="zoom"
              data-aos-duration="300"
              data-aos-easing="ease-in-out"
            >
              Medical Coding and Billing Training in India A medical coding and
              billing specialist in India undergoes an intensive medical billing
              and coding program. This training ensures that Indian medical
              coding specialists possess the most up to date industry
              information and produce excellent quality results for overseas
              customers. At Clinics4Health our medical coding specialists study
              topics …
            </p>
          </div>
        </div>
        <hr />
        <div className="article-2" onClick={() => handleArticleClick(2)}>
          <div
            className="article-img"
            data-aos="zoom"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
          >
            <img src={img2} alt="img2" />
          </div>
          <div className="article-content">
            <h1
              data-aos="zoom"
              data-aos-duration="300"
              data-aos-easing="ease-in-out"
            >
              Medical Billing & Coding In India
            </h1>
            <p
              data-aos="zoom"
              data-aos-duration="300"
              data-aos-easing="ease-in-out"
            >
              Medical Coding and Billing Training in India A medical coding and
              billing specialist in India undergoes an intensive medical billing
              and coding program. This training ensures that Indian medical
              coding specialists possess the most up to date industry
              information and produce excellent quality results for overseas
              customers. At Clinics4Health our medical coding specialists study
              topics …
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
