import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import footerLogo from "../../assets/images/logo-footer.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Link to="/catalog" className={styles.catalogButton}>
          <span className={styles.catalogButtonLabel}>To catalog</span>
        </Link>

        <div className={styles.footerNavSection}>
          <div className={styles.footerLogo}>
            <img className={styles.footerLogoImg} src={footerLogo} alt="Logo" />
          </div>
          <nav className={styles.footerNav}>
            <Link to="/" className={styles.footerLink}>
              Home
            </Link>
            <Link to="/delivery" className={styles.footerLink}>
              Delivery and payment
            </Link>
            <Link to="/contacts" className={styles.footerLink}>
              Contacts
            </Link>
            <Link to="/faq" className={styles.footerLink}>
              FAQ
            </Link>
            <span className={styles.footerLink}>Created by</span>
          </nav>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerRights}>
            © BARASHOP <br /> {currentYear} All Rights Reserved
          </div>
          <Link to="/privacy" className={styles.footerPrivacy}>
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
