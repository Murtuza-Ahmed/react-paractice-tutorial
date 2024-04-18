import styles from "./Breadcrums.module.css";
import arrow_icon from "../../assets/image/breadcrum_arrow.png";

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className={styles.Breadcrums}>
      HOME <img src={arrow_icon} alt="ArrowIcon" /> SHOP{" "}
      <img src={arrow_icon} alt="ArrowIcon" /> {product.category}{" "}
      <img src={arrow_icon} alt="ArrowIcon" /> {product.name}
    </div>
  );
};

export default Breadcrums;
