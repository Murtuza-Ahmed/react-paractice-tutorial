import styles from "./Hero.module.css";
import HandIcon from "../../assets/image/hand_icon.png";
import ArrowIcon from "../../assets/image/arrow.png";
import HeroImage from "../../assets/image/hero_image.png";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.HeroLeft}>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className={styles.HeroHandIcon}>
            <p>New</p>
            <img src={HandIcon} alt="Hand_Icon" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className={styles.HeroLatestButton}>
          <div>Latest Collection</div>
          <img src={ArrowIcon} alt="Arrow_Icon" />
        </div>
      </div>
      <div className={styles.HeroRight}>
        <img src={HeroImage} alt="Women_Image" />
      </div>
    </div>
  );
};

export default Hero;
