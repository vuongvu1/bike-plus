import React from "react";
import styles from "./Community.module.css";
import { SideNavigation } from "../../components/SideNavigation";
import { NewFeeds } from "../../components/NewFeeds";
import { FeedInputCard } from "../../components/FeedInputCard";
import { FriendList } from "../../components/FriendList";

const Community: React.FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles.navigation} role="navigation">
        <SideNavigation />
      </div>
      <div className={styles.main} role="main">
        <FeedInputCard />
        <NewFeeds />
      </div>
      <div className={styles.complementary} role="complementary">
        <FriendList />
      </div>
    </div>
  );
};

export default Community;
