import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import ActionsButton from "../ProductsPage/ActionsButton";
import styles from "./CartModal.module.css";

import { clearCart, updateCart } from "../Store/CartSlice";
import { ToastContainer, toast } from "react-toastify";

const CartModal = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const buyNowHandler = () => {
    if (isLoggedIn) {
      toast("Order is on your way", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        style: {
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "1rem",
        },
      });

      dispatch(clearCart());
      dispatch(updateCart());
    } else {
      toast("Please login to place the order", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        style: {
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "1rem",
        },
      });
    }
  };

  // Disable scrolling of the background
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const cart = useSelector((state) => state.cart);
  const orderedCartItems = cart.itemOrder.map((id) => cart.items[id]);
  const grandTotal = orderedCartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const portalID = document.getElementById("modal1");

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className={styles.modalContent} onClick={stopPropagation}>
        <button className={styles.closeButton} onClick={props.onHide}>
          X
        </button>
        <div className={styles.modalBody}>
          {orderedCartItems.map((item) => (
            <div className={styles.cartItem} key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.cartImage}
              />
              <div className={styles.cartTitle}>{item.title}</div>
              <ActionsButton product={item} />
              <div className={styles.cartPrice}>
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.modalFooter}>
          {orderedCartItems.length > 0 && (
            <button className={styles.buyNowButton} onClick={buyNowHandler}>
              Buy now
            </button>
          )}

          <div className={styles.grandTotal}>Total Amount: ${grandTotal}</div>
        </div>
      </div>
    </div>,
    portalID
  );
};

export default CartModal;

// ReactDOM.createPortal takes 2 arguments - what to show and where to show.
