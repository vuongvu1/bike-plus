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
            <a href="/">Community</a>
          </li>
          <li>
            <a href="/marketplace">Marketplace</a>
          </li>
          <li>
            <a href="/bike-repair">Bike Repair</a>
          </li>
        </ul>
      </nav>
      <div className={styles.avatar}>
        <img src={Avatar} alt="User Avatar" />
      </div>
    </header>
  );
};
