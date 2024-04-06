import React from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/image/logo.png";
import cartIcon from "../../assets/image/cart_icon.png";
import { useState } from "react";

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
          Shop {menu === "shop" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("men")}>
          Men {menu === "men" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("women")}>
          Women{menu === "women" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("kid")}>
          Kids{menu === "kid" ? <hr /> : ""}
        </li>
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
