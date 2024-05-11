import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import "../styles/Contact.css";
import MapSection from "../components/MapSection";

const ContactPage = () => {
  return (
    <div className="contactPage bg-slate-900">
      <div className="contactHeader">
        <h1>CONTACT US</h1>
      </div>
      <AppointmentForm />
      <div className="contact-title-content">
        <h2 className="contact-title-sup text-white">Our Branches</h2>
        <h3 className="contact-title text-white">
          <span>Contact Details</span>
        </h3>
      </div>
      <MapSection
        heading="India Head Office"
        heading2="Address: 402, Piramyd Icon, Shreeji Nagri Rd/Ugat Rd, Jakeriya Circle LP Savani, Rd to, Jahangirabad, Palanpur Jakatnaka, Surat, Gujarat 395005"
        phone="+91 8650029851"
        mail="Info@yosatechnology.com"
        map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.42307790118!2d72.77952206020892!3d21.215065430399893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d980a615cbb%3A0xd9f62f07fbd04107!2sYosa%20Technology%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1715440110760!5m2!1sen!2sin"
      />
      {/* <div className="dotted-line"></div> */}
      <div className="legal-footer"></div>
    </div>
  );
};

export default ContactPage;
