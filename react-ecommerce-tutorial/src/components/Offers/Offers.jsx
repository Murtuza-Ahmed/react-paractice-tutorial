import styles from "./Offers.module.css";
import exclusiveImage from "../../assets/image/exclusive_image.png";

const Offers = () => {
  return (
    <div className={styles.Offers}>
      <div className={styles.OfferLeft}>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className={styles.OfferRight}>
        <img src={exclusiveImage} alt="Women-Iamge" />
      </div>
    </div>
  );
};

export default Offers;
