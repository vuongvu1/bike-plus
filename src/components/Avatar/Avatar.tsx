import React from "react";
import styles from "./Avatar.module.css";

type AvatarProps = {
  src: string;
  alt: string;
};

export const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return <img className={styles.avatar} src={src} alt={alt} />;
};
