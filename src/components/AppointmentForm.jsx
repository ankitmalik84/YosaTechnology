import React, { useEffect } from "react";
import "../styles/AppointmentForm.css";
import { ToastContainer } from "react-toastify";
import ContactForm from "./ContactUs";
const AppointmentForm = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="appointment-form-section">
      <div className="contact">
        <div className="formSide bg-black-gradient-2">
          <h2 className="font-bold text-[26px] text-white">
            Reach YosaTechnology for an appointment.
          </h2>
          <p className="font-semibold text-[18px] text-white ">
            Give us a call, email us, or fill out the form below and we’ll be in
            touch soon.
          </p>
        </div>
        <ContactForm
          title="Contact Us"
          Color1="bg-black-gradient-2"
          Color="text-white"
        />
      </div>

      <ToastContainer autoClose={3000} limit={1} closeButton={false} />
    </div>
  );
};

export default AppointmentForm;
