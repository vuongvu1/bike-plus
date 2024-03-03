import React from "react";
import styles from "./Home.module.css";
import { SideNavigation } from "../../components/SideNavigation";
import { NewFeeds } from "../../components/NewFeeds";
import { InputCard } from "../../components/InputCard";
import { FriendList } from "../../components/FriendList";

const Home: React.FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles.navigation} role="navigation">
        <SideNavigation />
      </div>
      <div className={styles.main} role="main">
        <InputCard />
        <NewFeeds />
      </div>
      <div className={styles.complementary} role="complementary">
        <FriendList />
      </div>
    </div>
  );
};

export default Home;
