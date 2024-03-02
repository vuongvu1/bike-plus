import React from "react";
import { Card, CardContent, CardMedia } from "../Card";
import { UserAvatar } from "../UserAvatar";
import { Flex } from "../Flex";
import { Typography } from "../Typography";
import AvatarImage from "../../assets/sample-avatar.webp";
import SampleMedia from "../../assets/sample-media.webp";
// import styles from "./FeedCard.module.css";

type CardProps = {
  children: React.ReactNode;
};

export const FeedCard: React.FC<CardProps> = ({ children }) => {
  return (
    <Card>
      <CardContent>
        <Flex direction="column" gap="8px">
          <UserAvatar
            src={AvatarImage}
            alt="User avatar"
            username="User Name"
          />

          <Typography variant="p">{children}</Typography>
        </Flex>
      </CardContent>
      <CardMedia src={SampleMedia} alt="Sample media" />
      <CardContent>Bottom</CardContent>
    </Card>
  );
};
