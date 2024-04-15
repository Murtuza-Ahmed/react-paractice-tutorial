import styles from "./Footer.module.css";
import footer_logo from "../../assets/image/logo_big.png";
import instagram_icon from "../../assets/image/instagram_icon.png";
import pintester_icon from "../../assets/image/pintester_icon.png";
import whatapp_icon from "../../assets/image/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterLogo}>
        <img src={footer_logo} alt="Shopper" />
        <p>SHOPPER</p>
      </div>
      <ul className={styles.FooterLink}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={styles.FooterSocialIconContainer}>
        <div className={styles.FooterSocialIcon}>
          <img src={instagram_icon} alt="Instagram-Icon" />
        </div>
        <div className={styles.FooterSocialIcon}>
          <img src={pintester_icon} alt="Pintester-Icon" />
        </div>
        <div className={styles.FooterSocialIcon}>
          <img src={whatapp_icon} alt="Whatapp-Icon" />
        </div>
      </div>
      <div className={styles.FooterCopyRight}>
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
