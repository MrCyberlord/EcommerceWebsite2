import React from "react";
import styles from "./About.module.css"; // Importing the CSS module

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Intro Section */}
      <div className={styles.introText}>
        JewelFusion, your one-stop store for Clothes, Jewels and Electronic
        Items.
      </div>

      {/* About Us Header */}
      <h3 className={styles.aboutUsHeader}>About Us</h3>

      {/* About Us Content */}
      <p className={styles.paragraph}>
        Welcome to JewelFusion, Your One-Stop Shop for Lifestyle Essentials! At
        JewelFusion, we believe that shopping should be a seamless, enjoyable
        experience. From the moment you land on our website to the instant you
        unbox your new treasures, we’re here to exceed your expectations.
      </p>

      {/* Sub-headers and Their Content */}
      <strong className={styles.subHeader}>
        Electronics for the Modern Life
      </strong>
      <p className={styles.paragraph}>
        Technology has the power to make life easier and more enjoyable. That's
        why we offer a curated collection of cutting-edge electronics designed
        to fit your modern lifestyle.
      </p>

      <strong className={styles.subHeader}>Jewelry That Speaks Volumes</strong>
      <p className={styles.paragraph}>
        Add a touch of elegance to your daily life with our exquisite range of
        jewelry. Whether you're searching for a timeless piece or something
        unique, we have a wide array of options that are as unique as you are.
      </p>

      <strong className={styles.subHeader}>Clothing for Every Occasion</strong>
      <p className={styles.paragraph}>
        Our diverse clothing range offers something for everyone, regardless of
        age or style preference. From casual wear to special occasion outfits,
        our selection is designed to not only meet but also exceed your fashion
        needs.
      </p>

      {/* Our Promise */}
      <div className={styles.ourPromise}>
        <strong>Our Promise</strong>
        <ul className={styles.unorderedList}>
          <li>
            Quality Over Everything: Each product is handpicked to ensure it
            meets the highest standards of quality.
          </li>
          <li>
            Customer-Centric Approach: Your satisfaction is our top priority.
          </li>
          <li>
            Sustainability: We are committed to sustainability and ensure
            ethical practices from sourcing to delivery.
          </li>
        </ul>
      </div>

      {/* Footer Text */}
      <p className={`${styles.paragraph} ${styles.footerText}`}>
        Why Choose Us?
        <ul className={styles.unorderedList}>
          <li>
            Wide Selection: A plethora of products across diverse categories.
          </li>
          <li>
            Fast Shipping: No more endless waiting. Get your order at your
            doorstep quickly.
          </li>
          <li>
            Safe & Secure: Shop with confidence knowing that your data is safe
            with us.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default About;
