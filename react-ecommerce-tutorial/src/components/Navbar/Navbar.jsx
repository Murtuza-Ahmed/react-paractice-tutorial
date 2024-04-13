import React from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/image/logo.png";
import cartIcon from "../../assets/image/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <img src={logo} alt="Shopping-Beg-Icon" />
        <p>SHOPPER</p>
      </div>
      <ul className={styles.navMenu}>
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/mens">Men</Link> {menu === "men" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/womens">Women</Link> {menu === "women" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("kid")}>
          <Link to="/kids">Kids</Link> {menu === "kid" ? <hr /> : ""}
        </li>
      </ul>
      <div className={styles.navLoginCart}>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="Cart-Icon" />
        </Link>
        <div className={styles.navCartCount}>0</div>
      </div>
    </div>
  );
};
export default Navbar;
