import React, { useState } from "react";
import styles from "./Navbar.module.css";
import CartIcon from "./Cart/CartIcon";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthSliceAction } from "./Store/AuthSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);

  const logoutHandler = () => {
    dispatch(AuthSliceAction.logout());
  };

  return (
    <>
      <div className={styles.Navbar}>
        <span className={styles.logo}>JewelFusion</span>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.hamburgerIcon}
          onClick={() => setIsMobile(!isMobile)}
        />
        <nav className={`${styles.mobileNav} ${isMobile ? styles.active : ""}`}>
          <Link to="/Products" onClick={() => setIsMobile(!isMobile)}>
            Home
          </Link>
          <Link to="/About" onClick={() => setIsMobile(!isMobile)}>
            About
          </Link>
          <Link to="/Contact" onClick={() => setIsMobile(!isMobile)}>
            Contact
          </Link>
          {isAuth ? (
            <Link
              to="/Login"
              onClick={() => {
                logoutHandler();
                setIsMobile(!isMobile);
              }}
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/Login"
              onClick={() => {
                logoutHandler();
                setIsMobile(!isMobile);
              }}
            >
              Login
            </Link>
          )}
        </nav>
        <CartIcon />
      </div>
    </>
  );
};

export default Navbar;
