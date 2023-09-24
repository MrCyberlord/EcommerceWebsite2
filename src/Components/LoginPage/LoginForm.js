import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AuthSliceAction } from "../Store/AuthSlice";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuth);

  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC24MaQYO1AUk2M-qiGE1qkq4edwH-RYgw";

  const submitHandler = async (e) => {
    e.preventDefault();

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
      alert("Logged In");
    } catch (error) {
      console.log("Error during login:", error);
      alert("Login Failed: Invalid credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isAuth ? (
        <div className={styles.loggedInMessage}>You are logged in.</div>
      ) : (
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
          <div className={styles.LoginButtons}>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
            <a className={styles.forgotPassword} href="#">
              Forgot Password
            </a>
          </div>
        </form>
      )}
    </>
  );
};

export default LoginForm;
