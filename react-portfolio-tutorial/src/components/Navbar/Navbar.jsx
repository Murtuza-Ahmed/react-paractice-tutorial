import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <span className={styles.menuButton}>
          {open ? (
            <RxCross2 onClick={() => setOpen(!open)} />
          ) : (
            <FaBars onClick={() => setOpen(!open)} />
          )}
        </span>
        <ul
          className={`${styles.menuItem} ${open && styles.menuOpen}`}
          onClick={() => setOpen(false)}
        >
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
