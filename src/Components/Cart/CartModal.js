import React from "react";
import Modal from "../Modal";

const CartModal = (props) => {
  return (
    <Modal onHide={props.onHide}>
      <h1>Cart Item1</h1>
      <h1>Cart Item2</h1>
      <h1>Cart Item3</h1>
      <h1>Cart Item4</h1>
    </Modal>
  );
};

export default CartModal;
