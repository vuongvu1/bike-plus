import React from "react";
import { Card, CardContent, CardMedia } from "../Card";
import { UserAvatar } from "../UserAvatar";
import { Flex } from "../Flex";
import { Typography } from "../Typography";
import { IconButton } from "../IconButton";
import { LoveFilledIcon } from "../../assets/icons/LoveFilledIcon";
import { LoveIcon } from "../../assets/icons/LoveIcon";
import { CommentIcon } from "../../assets/icons/CommentIcon";
import { BookmarkIcon } from "../../assets/icons/BookmarkIcon";

import AvatarImage from "../../assets/images/sample-avatar.webp";
import SampleMedia from "../../assets/images/sample-media.webp";

type CardProps = {
  children: React.ReactNode;
  isLiked?: boolean;
};

export const FeedCard: React.FC<CardProps> = ({ children, isLiked }) => {
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
          <Flex gap="var(--spacing-sm)">
            <IconButton
              icon={isLiked ? <LoveFilledIcon fill="red" /> : <LoveIcon />}
            />
            <IconButton icon={<CommentIcon />} />
          </Flex>
          <IconButton icon={<BookmarkIcon />} />
        </Flex>
      </CardContent>
    </Card>
  );
};
