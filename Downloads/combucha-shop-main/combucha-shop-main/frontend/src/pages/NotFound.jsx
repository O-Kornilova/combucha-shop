import { Link } from "react-router-dom";
import styles from "../assets/styles/NotFound.module.css";
import avatar from "../assets/images/ava.webp";

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.number}>404</h1>

      <img src={avatar} alt="Capibara" className={styles.avatar} />
      <p className={styles.text}>Oops... This page doesn’t exist</p>

      <Link to="/" className={styles.button}>
        Go Home
      </Link>
    </div>
  );
}
