import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { Avatar } from "../Avatar";
import Logo from "../../assets/bike-plus-logo.svg";
import AvatarImage from "../../assets/sample-avatar.webp";

const linkLabelMap = [
  { link: "/", label: "Community" },
  { link: "/marketplace", label: "Marketplace" },
  { link: "/repair", label: "Bike Repair" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src={Logo} alt="Bike Plus Logo" />
        </NavLink>
      </div>
      <nav className={styles.nav}>
        <ul>
          {linkLabelMap.map(({ link, label }) => (
            <li key={link}>
              <NavLink
                to={link}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.avatar}>
        <Avatar src={AvatarImage} alt="User Avatar" />
      </div>
    </header>
  );
};
