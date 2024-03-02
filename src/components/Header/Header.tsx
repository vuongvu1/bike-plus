import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../assets/bike-plus-logo.svg";
import Avatar from "../../assets/sample-avatar.webp";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Bike Plus Logo" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Community</Link>
          </li>
          <li>
            <Link to="/marketplace">Marketplace</Link>
          </li>
          <li>
            <Link to="/repair">Bike Repair</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.avatar}>
        <img src={Avatar} alt="User Avatar" />
      </div>
    </header>
  );
};
