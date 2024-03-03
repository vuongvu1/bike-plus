import React from "react";
import { Typography } from "../Typography";
import styles from "./ProductTile.module.css";

type Props = {
  src: string;
  alt: string;
  price: string;
  name: string;
};

export const ProductTile: React.FC<Props> = ({ src, alt, price, name }) => {
  return (
    <div className={styles.container}>
      <img src={src} alt={alt} />
      <Typography variant="h3">{name}</Typography>
      <Typography variant="p">{price}</Typography>
    </div>
  );
};
