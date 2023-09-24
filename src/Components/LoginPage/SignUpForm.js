import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AuthSliceAction } from "../Store/AuthSlice";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC24MaQYO1AUk2M-qiGE1qkq4edwH-RYgw";

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(url, {
        email,
        password,
        returnSecureToken: true,
      });

      dispatch(
        AuthSliceAction.login({
          email: response.data.email,
          token: response.data.idToken,
        })
      );
      alert("Sign Up Successful");
    } catch (error) {
      console.error("Error during sign up:", error);
      alert("Sign Up Failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.formGroup}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          minLength="8"
          required
        ></input>
      </div>

      <div className={styles.formGroup}>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength="8"
          required
        ></input>
      </div>

      <div className={styles.formGroup}>
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          minLength="8"
          required
        ></input>
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignUpForm;
