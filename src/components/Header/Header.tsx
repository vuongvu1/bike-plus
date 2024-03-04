import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { CurrentUserAvatar } from "../CurrentUserAvatar";
import Logo from "../../assets/images/bike-plus-logo.svg";
import { useDevice } from "../../hooks/useDevice";
import { HomeIcon } from "../../assets/icons/HomeIcon";
import { MarketIcon } from "../../assets/icons/MarketIcon";
import { CogIcon } from "../../assets/icons/CogIcon";

const linkLabelMap = [
  { link: "/", label: "Community", icon: <HomeIcon /> },
  { link: "/marketplace", label: "Marketplace", icon: <MarketIcon /> },
  { link: "/repair", label: "Bike Repair", icon: <CogIcon /> },
];

export const Header = () => {
  const currentDevice = useDevice();
  const isDesktop = currentDevice === "desktop";

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src={Logo} alt="Bike Plus Logo" />
        </NavLink>
      </div>
      <nav className={styles.nav}>
        <ul>
          {linkLabelMap.map(({ link, label, icon }) => (
            <li key={link}>
              <NavLink
                to={link}
                title={label}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                {isDesktop ? label : icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.avatar}>
        <CurrentUserAvatar hideName />
      </div>
    </header>
  );
};
