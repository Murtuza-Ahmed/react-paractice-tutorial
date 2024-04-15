import styles from "./NewCollection.module.css";
import new_collections from "../../Data/new_collections";
import Item from "../Item/Item";

const NewCollection = () => {
  return (
    <div className={styles.NewCollection}>
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className={styles.Collection}>
        {new_collections.map((item, i) => (
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

export default NewCollection;
