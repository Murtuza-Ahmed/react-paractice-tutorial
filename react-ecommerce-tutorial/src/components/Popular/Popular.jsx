import styles from "./Popular.module.css";
import data_product from "../../assets/image/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className={styles.Popular}>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className={styles.PopularItem}>
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            newPrice={item.new_price}
            oldPrice={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
