import styles from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className={styles.Item}>
      <Link to={`/product/${props.id}`}>
        <img src={props.image} onClick={window.scrollTo(0, 0)} />
      </Link>
      <p>{props.name}</p>
      <div className={styles.ItemPrices}>
        <div className={styles.ItemPriceNew}>${props.newPrice}</div>
        <div className={styles.ItemPriceOld}>${props.oldPrice}</div>
      </div>
    </div>
  );
};

export default Item;
