import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import styles from "./MainLoginPage.module.css";

const MainLoginPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const switchToLogin = () => {
    setIsLoginForm(true);
  };

  const switchToRegister = () => {
    setIsLoginForm(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${isLoginForm ? styles.active : ""}`}
          onClick={switchToLogin}
        >
          Log In
        </div>
        <div
          className={`${styles.tab} ${!isLoginForm ? styles.active : ""}`}
          onClick={switchToRegister}
        >
          Sign Up
        </div>
      </div>
      <div className={styles.forms}>
        {isLoginForm ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default MainLoginPage;
