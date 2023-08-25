import React from "react";
import styles from "./Navbar.module.css";
import CartIcon from "./Cart/CartIcon";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <CartIcon />
    </div>
  );
};

export default Navbar;
