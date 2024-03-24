import styles from "./assets/style/App.module.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
    </div>
  );
};
export default App;
