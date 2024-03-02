import React from "react";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles.navigation} role="navigation">
        Nav
      </div>
      <div className={styles.main} role="main">
        Main
      </div>
      <div className={styles.complementary} role="complementary">
        Friend
      </div>
    </div>
  );
};

export default Home;
