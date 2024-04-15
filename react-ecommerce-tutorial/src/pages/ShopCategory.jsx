import { useContext } from "react";
import styles from "./CSS/ShopCategory.module.css";
import { ShopContext } from "../context/ShopContext";
import drop_down from "../assets/image/dropdown_icon.png";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className={styles.ShopCategory}>
      <img src={props.banner} className={styles.ShopCategoryBanner} />
      <div className={styles.ShopCategoryIndexSort}>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className={styles.ShopCategorySort}>
          Sort by <img src={drop_down} />
        </div>
      </div>
      <div className={styles.ShopCategoryProducts}>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                newPrice={item.new_price}
                oldPrice={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
