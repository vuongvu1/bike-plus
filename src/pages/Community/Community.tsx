import React from "react";
import styles from "./Community.module.css";
import { SideNavigation } from "../../components/SideNavigation";
import { NewFeeds } from "../../components/NewFeeds";
import { FeedInputCard } from "../../components/FeedInputCard";
import { FriendList } from "../../components/FriendList";
import { useDevice } from "../../hooks/useDevice";

const Community: React.FC = () => {
  const currentDevice = useDevice();
  const isDesktop = currentDevice === "desktop";
  const isLargerThanMobile = currentDevice !== "mobile";

  return (
    <div className={styles.body}>
      {isDesktop && (
        <div className={styles.navigation} role="navigation">
          <SideNavigation />
        </div>
      )}
      <div className={styles.main} role="main">
        <FeedInputCard />
        <NewFeeds />
      </div>
      {isLargerThanMobile && (
        <div className={styles.complementary} role="complementary">
          <FriendList />
        </div>
      )}
    </div>
  );
};

export default Community;
