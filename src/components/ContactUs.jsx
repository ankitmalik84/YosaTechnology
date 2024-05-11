import React, { useState, useEffect, useRef } from "react";
import "../styles/ContactUs.css";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import Button from "./Button";
const ContactForm = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!firstName.trim()) {
      errors.firstName = "First name is required";
    } else if (firstName.trim().length < 3) {
      errors.firstName = "First name must be at least 3 characters";
    }
    if (!lastName.trim()) {
      errors.lastName = "Last name is required";
    } else if (lastName.trim().length < 2) {
      errors.lastName = "Last name must be at least 2 characters";
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (phoneNumber.trim().length !== 10) {
      errors.phoneNumber = "Phone number must be of 10 digits";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    emailjs
      .sendForm("service_4g8azvj", "template_i4o2rqc", form.current, {
        publicKey: "v7pZYJu-ICm2PL9zl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Details Has been sent !", {
            position: toast.POSITION.TOP_CENTER,
            onOpen: () => setIsSubmitted(true),
            onClose: () => setIsSubmitted(false),
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    // Reset form fields and errors after successful submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
    setFormErrors({});
  };

  return (
    <div
      className={`${props.container ? props.container : "form-container"} ${
        props.Color1 ? props.Color1 : ""
      }`}
    >
      <h2 className={`${props.Color ? props.Color : ""} form-title `}>
        <span className="text-gradient">{props.title}</span>
      </h2>

      <form
        ref={form}
        className={`form-content ${props.Color ? props.Color : ""}`}
        onSubmit={handleSubmit}
      >
        <label>
          First Name:
          <input
            type="text"
            className="bg-blue-gradient"
            value={firstName}
            name="first_name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          {formErrors.firstName && (
            <p className="error-message">{formErrors.firstName}</p>
          )}
        </label>

        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            className="bg-blue-gradient"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          {formErrors.lastName && (
            <p className="error-message">{formErrors.lastName}</p>
          )}
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            name="phone"
            className="bg-blue-gradient"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          {formErrors.phoneNumber && (
            <p className="error-message">{formErrors.phoneNumber}</p>
          )}
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            className="bg-blue-gradient"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {formErrors.Email && (
            <p className="error-message">{formErrors.Email}</p>
          )}
        </label>
        <br />
        <label>
          Message :
          <input
            type="textarea"
            className="messageBox bg-blue-gradient"
            name="message"
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {formErrors.Message && (
            <p className="error-message">{formErrors.Message}</p>
          )}
        </label>

        <br />
        <button
          type="submit"
          className=" py-3 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none shadow-md shadow-sky-500 "
        >
          Send Message
        </button>
        {/* <Button
          type="submit"
          styles={`mt-2`}
          text={`Send Message`}
          link={`#`}
        /> */}

        <p
          className="success-message"
          style={{ display: isSubmitted ? "block" : "none" }}
        >
          Message details has been sent!. We will get back to you soon.
        </p>
      </form>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
};

export default ContactForm;
