import React from "react";
import Men from "../../assets/image/hero/men-icon.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Murtuza</h1>
        <p className={styles.description}>
          👨‍💻As a fresh web developer with a passion for designing and developing
          user interfaces, 🎓I am currently expanding my skill set to include
          ReactJS. My proficiency in HTML, CSS, Bootstrap, and JavaScript has
          allowed me to create visually appealing and highly functional web
          applications. I am excited about the opportunity to contribute my
          skills, along with the ongoing learning of ReactJS, to deliver
          outstanding web solutions that meet user needs and drive business
          growth.
        </p>
        <a
          href="mailto:murtuza.programmer@gmail.com"
          className={styles.contactBotton}
        >
          Contact Me
        </a>
      </div>
      <img src={Men} alt="Pcture" className={styles.heroImage} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
