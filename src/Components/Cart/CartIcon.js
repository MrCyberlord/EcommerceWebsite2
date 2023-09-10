import React, { useState } from "react";
import styles from "./CartIcon.module.css";

import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import CartModal from "./CartModal";

const CartIcon = () => {
  const cartItemCount = useSelector((state) => state.cart.totalQuantity);

  const [showPortal, setShowPortal] = useState(false);

  function onPortalShow() {
    setShowPortal(!showPortal);
  }

  return (
    <div className={styles.cartIconWrapper} onClick={onPortalShow}>
      <FontAwesomeIcon icon={faCartShopping} className={styles.cartIcon} />
      <span className={styles.itemCount}>{cartItemCount}</span>

      {showPortal ? <CartModal onHide={onPortalShow} /> : null}
    </div>
  );
};

export default CartIcon;
