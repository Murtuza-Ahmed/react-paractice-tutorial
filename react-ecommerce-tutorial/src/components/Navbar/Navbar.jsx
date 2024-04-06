import React from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/image/logo.png";
import cartIcon from "../../assets/image/cart_icon.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <img src={logo} alt="Shopping-Beg-Icon" />
        <p>SHOPPER</p>
      </div>
      <ul className={styles.navMenu}>
        <li>
          Shop <hr />
        </li>
        <li>Menu</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className={styles.navLoginCart}>
        <button>Login</button>
        <img src={cartIcon} alt="Cart-Icon" />
        <div className={styles.navCartCount}>0</div>
      </div>
    </div>
  );
};
export default Navbar;
