import React from "react";
import { Card, CardContent, CardMedia } from "../Card";
import { UserAvatar } from "../UserAvatar";
import { Flex } from "../Flex";
import { Typography } from "../Typography";
import AvatarImage from "../../assets/sample-avatar.webp";
import SampleMedia from "../../assets/sample-media.webp";
import { LoveFilledIcon } from "../../assets/LoveFilledIcon";
import { LoveIcon } from "../../assets/LoveIcon";
import { CommentIcon } from "../../assets/CommentIcon";
import { BookmarkIcon } from "../../assets/BookmarkIcon";
import styles from "./FeedCard.module.css";

type CardProps = {
  children: React.ReactNode;
};

export const FeedCard: React.FC<CardProps> = ({ children }) => {
  return (
    <Card>
      <CardContent>
        <Flex direction="column" gap="var(--spacing-sm)">
          <UserAvatar
            src={AvatarImage}
            alt="User avatar"
            username="User Name"
          />
          <Typography variant="p">{children}</Typography>
        </Flex>
      </CardContent>
      <CardMedia src={SampleMedia} alt="Sample media" />
      <CardContent>
        <Flex justify="space-between">
          <Flex gap="var(--spacing-md)">
            <LoveFilledIcon fill="red" />
            <LoveIcon className={styles.action} />
            <CommentIcon className={styles.action} />
          </Flex>
          <BookmarkIcon className={styles.action} />
        </Flex>
      </CardContent>
    </Card>
  );
};
