import React from "react";

import styles from "./FormStyles.module.css";

const LoginForm = () => {
  return (
    <form>
      <div className={styles.formGroup}>
        <label>Email</label>
        <input type="email"></input>
      </div>
      <div className={styles.formGroup}>
        <label>Password</label>
        <input type="password"></input>
      </div>
      <div className={styles.LoginButtons}>
        {" "}
        <button>Login</button>
        <a className={styles.forgotPassword} href="#">
          Forgot Password
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
