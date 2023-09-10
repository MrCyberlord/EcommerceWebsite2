import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Store/CartSlice";

import styles from "./ActionsButton.module.css";

const ActionsButton = ({ product }) => {
  const dispatch = useDispatch();

  const itemQuantity = useSelector(
    (state) => state.cart.items[product.id]?.quantity || 0
  );

  const handleAddItem = () => {
    dispatch(addItem(product));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(product.id));
  };

  return (
    <div className={styles.actionsButtonContainer}>
      <button className={styles.actionButton} onClick={handleRemoveItem}>
        -
      </button>
      <span className={styles.actionQuantity}>{itemQuantity || " "}</span>
      <button className={styles.actionButton} onClick={handleAddItem}>
        +
      </button>
    </div>
  );
};

export default ActionsButton;
