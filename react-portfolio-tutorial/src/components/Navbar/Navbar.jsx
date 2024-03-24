import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../pages/utils";
import barsMenu from "../../../assets/image/nav/bars-icon.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          src={getImageUrl("../../../assets/image/nav/bars-icon.png")}
          className={styles.menuButton}
        />
        <ul className={styles.menuItem}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
