import React, { useState } from "react";

import styles from "./ContactPage.module.css";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const firebasertdbURL =
      "https://ecommercewebsite2-d7455-default-rtdb.firebaseio.com/";

    axios
      .post(`${firebasertdbURL}/contactMessages.json`, formData)
      .then(() => {
        // Reset form fields
        setFormData({ name: "", phoneNumber: "", email: "", message: "" });
      })
      .catch((error) => console.log("The error is:", error));
  };

  return (
    <div className={styles.contactFormContainer}>
      <form onSubmit={submitHandler}>
        <div className={styles.inputGroup}>
          <input
            placeholder="Enter your name here"
            type="text"
            name="name"
            value={formData.name}
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            placeholder="Enter your phone number here"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            placeholder="Enter your email here"
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <textarea
            placeholder="Type your message here..."
            name="message"
            rows="5"
            value={formData.message}
            onChange={changeHandler}
            required
          ></textarea>
        </div>
        <button type="submit">Send message</button>
      </form>
    </div>
  );
};

export default ContactPage;
