import { Link } from "react-router-dom";
import styles from "./SalonLogo.module.css";

export default function SalonLogo() {
  const image = "mayfair.PNG";

  return (
    <div>
      <Link to="/">
        <img className={styles.logo} src={image} />
      </Link>
    </div>
  );
}
