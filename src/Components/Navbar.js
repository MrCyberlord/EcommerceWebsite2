import React from "react";
import styles from "./Navbar.module.css";
import CartIcon from "./Cart/CartIcon";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.Navbar}>
        <nav>
          <Link to="/Products">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Login">Login</Link>
        </nav>
        <CartIcon />
      </div>
    </>
  );
};

export default Navbar;
