import { Link } from "react-router-dom";
import styles from "./SalonLogo.module.css";

export default function HomeLogo() {
  const image = "mayfair.PNG";

  return (
    <Link to="contacts" className={styles.homeLogo}>
      <img className={styles.logo2} src={image} />
      <p></p>
    </Link>
  );
}
