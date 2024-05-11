import React from "react";
import "../styles/MapSection.css";

const MapSection = (props) => {
  return (
    <div className="map-section pb-6">
      <div className="contact-details text-white">
        <h1 className="font-bold text-[45px]">{props.heading}</h1>
        <p className="text-[20px]">{props.heading2}</p>
        <h1 className="font-semibold text-[28px]">Phone</h1>
        <p className="text-[18px]">
          <a
            href={props.phone}
            style={{ textDecoration: "none", color: "white" }}
          >
            {props.phone}
          </a>
        </p>
        <h1 className="font-semibold text-[28px]">Email</h1>
        <p className="text-[18px]">
          <a
            href="mailto:Info@yosatechnology.com"
            style={{ textDecoration: "none", color: "white" }}
          >
            {props.mail}
          </a>
        </p>
      </div>
      <div className="mapbox">
        <figure>
          <iframe
            title="map"
            src={props.map}
            width="100%"
            height="400"
            loading="lazy"
          ></iframe>
        </figure>
      </div>
    </div>
  );
};

export default MapSection;
