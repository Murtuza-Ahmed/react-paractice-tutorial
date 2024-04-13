import styles from "./Item.module.css";

const Item = (props) => {
  return (
    <div className={styles.Item}>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className={styles.ItemPrices}>
        <div className={styles.ItemPriceNew}>{props.newPrice}</div>
        <div className={styles.ItemPriceOld}>{props.oldPrice}</div>
      </div>
    </div>
  );
};

export default Item;
