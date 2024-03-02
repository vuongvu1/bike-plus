import React from "react";
import styles from "./Home.module.css";
import { Card, CardContent } from "../../components/Card";
import { UserAvatar } from "../../components/UserAvatar";
import AvatarImage from "../../assets/sample-avatar.webp";
import { FeedCard } from "../../components/FeedCard";

const Home: React.FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles.navigation} role="navigation">
        <Card>
          <CardContent>Nav </CardContent>
        </Card>
      </div>
      <div className={styles.main} role="main">
        <FeedCard>test</FeedCard>
        <FeedCard>test</FeedCard>
        <FeedCard>test</FeedCard>
      </div>
      <div className={styles.complementary} role="complementary">
        <UserAvatar src={AvatarImage} alt="User avatar" username="User Name" />
        <UserAvatar src={AvatarImage} alt="User avatar" username="User Name" />
        <UserAvatar src={AvatarImage} alt="User avatar" username="User Name" />
        <UserAvatar src={AvatarImage} alt="User avatar" username="User Name" />
      </div>
    </div>
  );
};

export default Home;
