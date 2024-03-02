import React from "react";
import styles from "./IconButton.module.css";

type IconButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
};

export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button className={styles.iconButton} onClick={onClick}>
      {icon}
    </button>
  );
};
