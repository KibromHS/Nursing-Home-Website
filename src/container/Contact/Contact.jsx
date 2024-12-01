import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://saintgabrielnursinghome.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, subject, message }),
        }
      );

      // const response = await fetch("http://localhost:5000/send-email", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ name, email, subject, message }),
      // });

      const text = await response.text();
      const data = text ? JSON.parse(text) : {};
      if (response.ok) {
        toast("Email sent successfully");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error("Something went wrong");
        console.log(data.message || "Error without message");
      }
    } catch (e) {
      toast.error("Sorry! couldn't send email");
      console.error("error", e);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="left-side">
        <h1>Contact Us</h1>
        <div />
        <ul>
          <li>
            <a href="tel:214-603-2783">
              <FaPhone />
              214-603-2783
            </a>
          </li>
          <li>
            <a href="mailto:info@saintgabrielnursinghome.com">
              <FaMailBulk />
              info@saintgabrielnursinghome.com
            </a>
          </li>
          <li>
            <a href="https://google.com/maps">
              <FaLocationDot />
              5406 30th Ave S, Seattle, WA 981082433 S 135th Street, Seattle, WA
              98168
            </a>
          </li>
        </ul>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26772.692510308934!2d38.78145349289865!3d8.911579824058885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1731595542777!5m2!1sen!2set"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="right-side">
        <h3>Leave us a message and we will get back</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="name-email">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <textarea
              rows={5}
              required
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
