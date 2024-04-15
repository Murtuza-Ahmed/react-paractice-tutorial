import { useContext } from "react";
import styles from "./CSS/ShopCategory.module.css";
import { ShopContext } from "../context/ShopContext";

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return <div className={styles.ShopCategory}></div>;
};

export default ShopCategory;
