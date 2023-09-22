import React from "react";

import styles from "./FormStyles.module.css";

const SignUpForm = () => {
  return (
    <form>
      <div className={styles.formGroup}>
        <label>Name</label>
        <input type="text"></input>
      </div>

      <div className={styles.formGroup}>
        <label>Email</label>
        <input type="email"></input>
      </div>

      <div className={styles.formGroup}>
        <label>Password</label>
        <input type="password"></input>
      </div>

      <button>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
