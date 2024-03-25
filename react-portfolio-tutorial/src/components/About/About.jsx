import React from "react";
import styles from "./About.module.css";
import WomenLaptop from "../../assets/image/about/3d-woman-laptop.png";
import Cursor from "../../assets/image/about/arrow.png";
import MUI from "../../assets/image/about/laptop.png";
import Backend from "../../assets/image/about/mobile.png";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={WomenLaptop}
          alt="Siting With Laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={Cursor} alt="Cursor-Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm frontend developer with experience in build and optimized
                sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={Backend} alt="CPU-Icon" />
            <div className={styles.aboutItemText}>
              <h3>BackEnd Developer</h3>
              <p>
                I'm Backend Developer In Progress... And I have exp developing
                back-end system and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={MUI} alt="UI-Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                system as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default About;
