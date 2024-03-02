import React from "react";
import styles from "./Home.module.css";
import { Card, CardContent } from "../../components/Card";

const Home: React.FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles.navigation} role="navigation">
        <Card>
          <CardContent>Nav </CardContent>
        </Card>
      </div>
      <div className={styles.main} role="main">
        <Card>
          <CardContent>Main lorem ipsum</CardContent>
        </Card>
        <Card>
          <CardContent>Main lorem ipsum</CardContent>
        </Card>
        <Card>
          <CardContent>Main lorem ipsum</CardContent>
        </Card>
      </div>
      <div className={styles.complementary} role="complementary">
        <Card>
          <CardContent>Friend</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
