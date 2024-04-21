import { useContext } from "react";
import styles from "./CartItems.module.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/image/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItem, removeFromCart } = useContext(ShopContext);
  console.log(cartItem);
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

      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div>
              <div className={styles.CartItemFormat}>
                <img src={e.image} className={styles.CartIconProductIcon} />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className={styles.CartItemQuantity}>
                  {CartItems[e.id]}
                </button>
                <p>{e.new_price * cartItem[e.id]}</p>
                <img
                  src={remove_icon}
                  alt="Cross-Icon"
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartItems;
