import React from "react";
import { Typography } from "../Typography";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Typography variant="span">
        © {new Date().getFullYear()} Hoang Vuong Vu
      </Typography>
    </footer>
  );
};
