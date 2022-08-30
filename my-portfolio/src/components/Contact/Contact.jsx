import "./Contact.scss";
import { useRef, useState } from "react";
import SectionTitle from "../UI/SectionTitle";

import emailjs from "@emailjs/browser";

import emailLogo from "../../assets/logos/email.png";
import mobile from "../../assets/logos/mobile.png";

import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoadingResults, setIsLLoadingResults] = useState(false);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLLoadingResults(true);

    setIsLLoadingResults(true);

    emailjs
      .sendForm(
        "service_puspxyl",
        "template_6md1zc9",
        form.current,
        "cw_Ah7RVI9N0-s0GM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setTimeout(() => {
      setIsLLoadingResults(false);
      setIsSubmitted(true);
      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
    }, 3000);
  };

  const { user_name, user_email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <SectionTitle>Contact me</SectionTitle>
      <div className="contact">
        <div className="app__footer-cards">
          <div className="app__footer-card">
            <img src={emailLogo} alt="email" />
            <a
              className="contact__email-link"
              href="mailto:abdelrhman.contact@gmail.com"
            >
              abdelrhman.contact@gmail.com
            </a>
          </div>
          <div className="app__footer-card">
            <img src={mobile} alt="mobile" />
            <a href="tel:+20 1003685977">01003685977</a>
          </div>
        </div>

        <form
          ref={form}
          className="app__footer-form app__flex"
          onSubmit={sendEmail}
        >
          <div className="app__flex">
            <input
              onChange={handleChangeInput}
              type="text"
              placeholder="Your Name"
              required
              name="user_name"
              value={user_name}
            />
          </div>
          <div className="app__flex">
            <input
              value={user_email}
              onChange={handleChangeInput}
              type="email"
              placeholder="Your email"
              required
              name="user_email"
            />
          </div>
          <div>
            <textarea
              onChange={handleChangeInput}
              value={message}
              placeholder="Your Message"
              name="message"
              required
            ></textarea>
          </div>
          {isSubmitted ? (
            <p className="contact-success-message">
              Your message has been successfully sent. I will contact you soon.
            </p>
          ) : (
            <button type="submit">
              {isLoadingResults ? "Sending.." : "Send Message"}
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Contact;
