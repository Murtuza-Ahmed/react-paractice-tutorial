import styles from "./assets/style/App.module.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
    </div>
  );
};
export default App;
