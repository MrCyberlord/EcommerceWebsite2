import React from "react";
import styles from "./Navbar.module.css";
import CartIcon from "./Cart/CartIcon";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthSliceAction } from "./Store/AuthSlice";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(AuthSliceAction.logout());
  };

  return (
    <>
      <div className={styles.Navbar}>
        <span className={styles.logo}>JewelFusion</span>
        <nav>
          <Link to="/Products">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          {isAuth ? (
            <Link to="/Login" onClick={logoutHandler}>
              Logout
            </Link>
          ) : (
            <Link to="/Login">Login</Link>
          )}
        </nav>
        <CartIcon />
      </div>
    </>
  );
};

export default Navbar;
