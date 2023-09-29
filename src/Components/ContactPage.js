import React, { useState } from "react";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import styles from "./ContactPage.module.css";

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

    if (!formData.name) {
      toast("Name is required.", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        style: {
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "1rem",
        },
      });
      return;
    }

    if (!formData.phoneNumber) {
      toast("Phone number is required.", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        style: {
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "1rem",
        },
      });
      return;
    }

    if (!/^[\d]+$/.test(formData.phoneNumber)) {
      toast("Enter a valid Phone Number", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        style: {
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "1rem",
        },
      });
      return;
    }

    if (!formData.email) {
      toast("Email is required.", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        style: {
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "1rem",
        },
      });
      return;
    }

    if (!formData.message) {
      toast("Message cannot be empty.", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        style: {
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "1rem",
        },
      });
      return;
    }

    toast("Thanks for contacting us.", {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      style: {
        backgroundColor: "#1b1755",
        color: "#fff",
        borderRadius: "1rem",
      },
    });

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
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <form onSubmit={submitHandler}>
        <div className={styles.inputGroup}>
          <input
            placeholder="Enter your name here"
            type="text"
            name="name"
            value={formData.name}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            placeholder="Enter your phone number here"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            placeholder="Enter your email here"
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.inputGroup}>
          <textarea
            placeholder="Type your message here..."
            name="message"
            rows="5"
            value={formData.message}
            onChange={changeHandler}
          ></textarea>
        </div>
        <button type="submit">Send message</button>
      </form>
    </div>
  );
};

export default ContactPage;
