import React from "react";
import styles from "./CartModal.module.css";

const CartModal = ({ show, onClose }) => {
  return show ? (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Your cart items go here */}
        <h1>Cart Items</h1>
      </div>
    </div>
  ) : null;
};

export default CartModal;
