import { useContext } from "react";
import styles from "./CartItems.module.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/image/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItem, removeFromCart } = useContext(ShopContext);

  return (
    <div className={styles.CartItemCountainer}>
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
              <div
                className={`${styles.cartItemFormatMain} ${styles.CartItemFormat}`}
              >
                <img src={e.image} className={styles.CartIconProductIcon} />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className={styles.CartItemQuantity}>
                  {cartItem[e.id]}
                </button>
                <p>${e.new_price * cartItem[e.id]}</p>
                <img
                  src={remove_icon}
                  alt="Cross-Icon"
                  onClick={() => removeFromCart(e.id)}
                  className={styles.CartIconRemoveIcon}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={styles.CartItemDown}>
        <div className={styles.cartItemTotal}>
          <h1>Carts Totals</h1>
          <div>
            <div className={styles.cartItemTotalItem}>
              <p>Subtotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className={styles.cartItemTotalItem}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={styles.cartItemTotalItem}>
              <h3>Total</h3>
              <h3>${0}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className={styles.CartItemPromoCode}>
          <p>If you have a promo code, Enter it here</p>
          <div className={styles.CartItemPromoBox}>
            <input type="text" placeholder="PromoCode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
