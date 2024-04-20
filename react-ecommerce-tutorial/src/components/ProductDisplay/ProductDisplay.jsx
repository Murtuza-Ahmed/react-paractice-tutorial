import styles from "./ProductDisplay.module.css";
import star_icon from "../../assets/image/star_icon.png";
import star_dull_icon from "../../assets/image/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className={styles.ProductDisplay}>
      <div className={styles.ProductDisplayleft}>
        <div className={styles.ProductDisplayImgList}>
          <img src={product.image} /> <img src={product.image} />{" "}
          <img src={product.image} /> <img src={product.image} />
        </div>
        <div className={styles.ProductDisplayImage}>
          <img src={product.image} className={styles.ProductDisplayMainImage} />
        </div>
      </div>
      <div className={styles.ProductDisplayRight}>
        <h1>{product.name}</h1>
        <div className={styles.ProductDisplayRightStar}>
          <img src={star_icon} alt="StarIcon" />
          <img src={star_icon} alt="StarIcon" />
          <img src={star_icon} alt="StarIcon" />
          <img src={star_icon} alt="StarIcon" />{" "}
          <img src={star_dull_icon} alt="StarDullIcon" />
          <p>(122)</p>
        </div>
        <div className={styles.ProductDisplayRightPrices}>
          <div className={styles.ProductDisplayRightPricesOld}>
            ${product.old_price}
          </div>
          <div className={styles.ProductDisplayRightPricesNew}>
            ${product.new_price}
          </div>
        </div>
        <div className={styles.ProductDisplayRightDescription}>
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a around neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className={styles.ProductDisplayRightSize}>
          <h1>Select Size</h1>
          <div className={styles.ProductDisplayRightSizes}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p className={styles.ProductDisplayRightCategory}>
          <span>Category :</span>Women, T-Shirt, Crop Top
        </p>
        <p className={styles.ProductDisplayRightCategory}>
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
