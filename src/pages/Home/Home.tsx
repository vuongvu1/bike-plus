import React from "react";
import styles from "./Home.module.css";
import { SideNavigation } from "../../components/SideNavigation";
import { SkeletonCard } from "../../components/SkeletonCard";
import { Flex } from "../../components/Flex";
import { NewFeeds } from "../../components/NewFeeds";
import { InputCard } from "../../components/InputCard";
import { FriendList } from "../../components/FriendList";

const Home: React.FC = () => {
  const [fakeLoading, setFakeLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setFakeLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.navigation} role="navigation">
        <Flex direction="column" gap="var(--spacing-sm)">
          <SideNavigation />
        </Flex>
      </div>
      <div className={styles.main} role="main">
        <InputCard />
        {fakeLoading ? (
          <>
            <SkeletonCard />
            <SkeletonCard numOfLines={2} />
            <SkeletonCard numOfLines={4} />
            <SkeletonCard numOfLines={2} />
          </>
        ) : (
          <NewFeeds />
        )}
      </div>
      <div className={styles.complementary} role="complementary">
        <FriendList />
      </div>
    </div>
  );
};

export default Home;
