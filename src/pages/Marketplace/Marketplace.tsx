import React from "react";
import styles from "./Marketplace.module.css";
import { Flex } from "../../components/Flex";
import { ProductListing } from "../../components/ProductListing";
import { ProductSearchCard } from "../../components/ProductSearchCard";

const Marketplace: React.FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles.navigation} role="navigation">
        <Flex direction="column" gap="var(--spacing-sm)">
          <ProductSearchCard />
        </Flex>
      </div>
      <div className={styles.main} role="main">
        <ProductListing />
      </div>
    </div>
  );
};

export default Marketplace;
