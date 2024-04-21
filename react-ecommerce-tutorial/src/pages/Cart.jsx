import CartItems from "../components/CartItems/CartItems";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  return (
    <div>
      <CartItems />
      <ShopContext/>
    </div>
  );
};

export default Cart;
