import styles from "./DescriptionBox.module.css";

const DescriptionBox = () => {
  return (
    <div className={styles.DescriptionBox}>
      <div className={styles.DescriptionBoxNavigator}>
        <div className={styles.DescriptionBoxNavBox}>Description</div>
        <div
          className={`${styles.DescriptionBoxNavBox} ${styles.DescriptionBoxNavBoxFade}`}
        >
          Reviews (122)
        </div>
      </div>
      <div className={styles.DescriptionBoxDescription}>
        <p>
          An e-commerce website is an online platform that facilitate the buying
          and selling of products or services over the internet. It serves as a
          virtual marketplace where business and individuals showcase their
          products, interact with customers, and conduct transaction without the
          need for a physical presence. E-commerce website have gained immense
          popularity due to their convenience, accessibility, and the global
          reach they offer.
        </p>
        <p>
          E-commerce website typically display products or services along with
          detailed description, iamge, prices, and any available variation(e.g.,
          sizes, colors). Each product usaully has its own dedicated page with
          relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
