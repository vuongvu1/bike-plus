import React from "react";
import styles from "./Home.module.css";
import { Card, CardContent } from "../../components/Card";
import { Flex } from "../../components/Flex";
import { NewFeeds } from "../../components/NewFeeds";
import { InputCard } from "../../components/InputCard";
import { FriendList } from "../../components/FriendList";

const Home: React.FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles.navigation} role="navigation">
        <Flex direction="column" gap="var(--spacing-sm">
          <Card>
            <CardContent>Find a friend</CardContent>
          </Card>
          <Card>
            <CardContent>Groups</CardContent>
          </Card>
          <Card>
            <CardContent>Events</CardContent>
          </Card>
          <Card>
            <CardContent>Saved</CardContent>
          </Card>
        </Flex>
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
