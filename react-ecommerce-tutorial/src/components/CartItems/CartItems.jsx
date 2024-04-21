import { useContext } from "react";
import styles from "./CartItems.module.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/image/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, CartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className={styles.CartItems}>
      <div className={styles.cartItemFormatMain}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {/* <div>
        <div className={styles.CartItemFormat}>
          <img src="" alt="" className={styles.CartIconProductIcon} />
          <p></p>
          <p></p>
          <button className={styles.CartItemQuantity}></button>
          <p></p>
          <img
            src={remove_icon}
            alt="Cross-Icon"
            onClick={() => removeFromCart()}
          />
        </div>
        <hr />
      </div> */}
    </div>
  );
};

export default CartItems;
