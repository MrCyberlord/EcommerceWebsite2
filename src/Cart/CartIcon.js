import React from "react";
import styles from "./CartIcon.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartIcon = () => {
  const cartItemCount = 10;

  return (
    <div className={styles.cartIconWrapper}>
      <FontAwesomeIcon icon={faCartShopping} className={styles.cartIcon} />
      <span className={styles.itemCount}>{cartItemCount}</span>
    </div>
  );
};

export default CartIcon;
