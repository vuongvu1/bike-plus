import React from "react";
import styles from "./IconButton.module.css";

type IconButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
  title?: string;
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  title,
}) => {
  return (
    <button className={styles.iconButton} onClick={onClick} title={title}>
      {icon}
    </button>
  );
};
