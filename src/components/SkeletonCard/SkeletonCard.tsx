import React from "react";
import { Card, CardContent } from "../Card";
import { Flex } from "../Flex";
import styles from "./SkeletonCard.module.css";

type Props = {
  numOfLines?: number;
};

export const SkeletonCard: React.FC<Props> = ({ numOfLines = 1 }) => {
  return (
    <Card className={styles.container}>
      <CardContent>
        <Flex direction="column" gap="var(--spacing-sm)">
          <div className={`${styles.skeleton} ${styles.title}`} />
          {[...Array(numOfLines)].map((_, index) => (
            <div key={index} className={styles.skeleton} />
          ))}
        </Flex>
      </CardContent>
    </Card>
  );
};
