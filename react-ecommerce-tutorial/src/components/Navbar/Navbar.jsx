import React, { useContext } from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/image/logo.png";
import cartIcon from "../../assets/image/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [showMenu, setShowMenu] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.navLogo}>
          <img src={logo} alt="Shopping-Beg-Icon" />
          <p>SHOPPER</p>
        </div>
        <div className={styles.ResponsiveIcon}>
          <div className={`${styles.Responsive} ${styles.Bars}`}>
            {showMenu ? (
              <ImCross onClick={() => setShowMenu(!showMenu)} />
            ) : (
              <FaBars onClick={() => setShowMenu(!showMenu)} />
            )}
          </div>
        </div>
        <ul
          className={`${styles.navMenu} ${styles.navMenuNone} ${
            showMenu && styles.ShowNavMenu
          }`}
        >
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
        <div
          className={`${styles.navLoginCart} ${styles.navMenuNone} 
          ${showMenu && styles.ShowNavMenu} `}
        >
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            <img src={cartIcon} alt="Cart-Icon" />
          </Link>
          <div className={`${styles.navCartCount}`}>{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
