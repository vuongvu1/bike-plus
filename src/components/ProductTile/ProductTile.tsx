import React from "react";
import { Typography } from "../Typography";
import { Flex } from "../Flex";
import { Card, CardMedia, CardContent } from "../Card";
import styles from "./ProductTile.module.css";

type Props = {
  src: string;
  alt: string;
  price: string;
  name: string;
};

export const ProductTile: React.FC<Props> = ({ src, alt, price, name }) => {
  return (
    <Card className={styles.container}>
      <CardMedia src={src} alt={alt} />
      <CardContent>
        <Flex direction="column" gap="var(--spacing-xs)">
          <Typography variant="h3">{name}</Typography>
          <Typography variant="p" color="var(--text-color-lighter)">
            {price}
          </Typography>
        </Flex>
      </CardContent>
    </Card>
  );
};
