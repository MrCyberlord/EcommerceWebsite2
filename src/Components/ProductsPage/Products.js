import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

import styles from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error Fetching Data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.products}>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <footer className={styles.footer}>
        © 2023 JewelFusion. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Products;
