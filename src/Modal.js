import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const ModalOverlay = (props) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} onClick={stopPropagation}>
        <button className={styles.closeButton} onClick={props.onHide}>
          X
        </button>
        {props.children}
      </div>
    </div>
  );
};

const Modal = (props) => {
  const portalID = document.getElementById("modal");
  return ReactDOM.createPortal(
    <ModalOverlay onHide={props.onHide}>{props.children}</ModalOverlay>,
    portalID
  );
};

export default Modal;

// ReactDOM.createPortal takes 2 arguments - what to show and where to show.
