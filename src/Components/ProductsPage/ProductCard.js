import React from "react";
import styles from "./ProductCard.module.css";
import ActionsButton from "./ActionsButton";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImage}
        src={product.image}
        alt={product.title}
      />
      <div className={styles.productTitle}>{product.title}</div>
      <div className={styles.productPrice}>
        Price: ${product.price}
        <ActionsButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
