import React from "react";
import { Card, CardContent } from "../Card";
import { Flex } from "../Flex";
import styles from "./SkeletonCard.module.css";

export const SkeletonCard: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Flex direction="column" gap="var(--spacing-sm)">
          <div className={`${styles.skeleton} ${styles.title}`} />
          <div className={styles.skeleton} />
          <div className={styles.skeleton} />
        </Flex>
      </CardContent>
    </Card>
  );
};
