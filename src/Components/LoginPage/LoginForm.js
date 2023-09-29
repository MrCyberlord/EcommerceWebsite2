import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AuthSliceAction } from "../Store/AuthSlice";
import { fetchCart } from "../Store/CartSlice";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

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

      // Dispatch fetchCart action to sync the user's cart after login
      dispatch(fetchCart());

      toast("Logged In", {
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
    } catch (error) {
      console.log("Error during login:", error);
      toast("Login Failed: Invalid credentials.", {
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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
      {isAuth ? (
        <div className={styles.loggedInMessage}>
          You are logged from id "{localStorage.getItem("email")}"
        </div>
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
            <a
              className={styles.forgotPassword}
              href="https://miro.medium.com/v2/resize:fit:750/0*QOZm9X5er1Y0r5-t"
            >
              Forgot Password
            </a>
          </div>
        </form>
      )}
    </>
  );
};

export default LoginForm;
