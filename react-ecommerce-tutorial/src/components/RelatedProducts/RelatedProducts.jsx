import styles from "./RelatedProducts.module.css";
import data_product from "../../Data/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className={styles.RelatedProducts}>
      <h1>Related Products</h1>
      <hr />
      <div className={styles.RelatedProductsItem}>
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

export default RelatedProducts;
