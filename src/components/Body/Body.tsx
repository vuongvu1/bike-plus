import React from "react";
import styles from "./Body.module.css";

type Props = {
  children: React.ReactNode;
};

export const Body: React.FC<Props> = ({ children }) => {
  return <main className={styles.body}>{children}</main>;
};
