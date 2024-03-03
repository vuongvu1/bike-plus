import React from "react";
import styles from "./Marketplace.module.css";
import { ProductListing } from "../../components/ProductListing";
import { ProductSearchCard } from "../../components/ProductSearchCard";
import { useDevice } from "../../hooks/useDevice";

const Marketplace: React.FC = () => {
  const currentDevice = useDevice();
  const isDesktop = currentDevice === "desktop";

  return (
    <div className={styles.body}>
      {isDesktop && (
        <div className={styles.navigation} role="navigation">
          <ProductSearchCard />
        </div>
      )}
      <div className={styles.main} role="main">
        {!isDesktop && <ProductSearchCard />}
        <ProductListing />
      </div>
    </div>
  );
};

export default Marketplace;
