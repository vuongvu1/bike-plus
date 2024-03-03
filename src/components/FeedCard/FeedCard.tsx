import React from "react";
import { Card, CardContent, CardMedia, CardDivider } from "../Card";
import { UserAvatar } from "../UserAvatar";
import { Flex } from "../Flex";
import { Typography } from "../Typography";
import { IconButton } from "../IconButton";
import { LoveFilledIcon } from "../../assets/icons/LoveFilledIcon";
import { LoveIcon } from "../../assets/icons/LoveIcon";
import { CommentIcon } from "../../assets/icons/CommentIcon";
import { BookmarkIcon } from "../../assets/icons/BookmarkIcon";
import { Feed as FeedType } from "../../contexts/MockDataContext";

type Props = {
  feed: FeedType;
};

export const FeedCard: React.FC<Props> = ({ feed }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  if (!feed) return <div>empty</div>;

  const { content, media, user, likes = 0, comments = 0 } = feed;
  const totalLikes = likes + (isLiked ? 1 : 0);

  return (
    <Card>
      <CardContent>
        <Flex direction="column" gap="var(--spacing-md)">
          <UserAvatar src={user.avatar} alt={user.name} username={user.name} />
          <Typography variant="p">{content}</Typography>
        </Flex>
      </CardContent>
      {media ? <CardMedia src={media} alt="feed media" /> : <CardDivider />}
      <CardContent>
        <Flex direction="column" gap="var(--spacing-sm)">
          <Flex gap="var(--spacing-md)">
            <Typography variant="p" color="var(--text-color-lighter)">
              {totalLikes} like{totalLikes > 1 ? "s" : ""}
            </Typography>
            <Typography variant="p" color="var(--text-color-lighter)">
              {comments} comment{comments > 1 ? "s" : ""}
            </Typography>
          </Flex>
          <Flex justify="space-between">
            <Flex gap="var(--spacing-sm)">
              <IconButton
                onClick={() => setIsLiked(!isLiked)}
                icon={
                  isLiked ? (
                    <LoveFilledIcon fill="var(--primary-color)" />
                  ) : (
                    <LoveIcon />
                  )
                }
              />
              <IconButton icon={<CommentIcon />} />
            </Flex>
            <IconButton icon={<BookmarkIcon />} />
          </Flex>
        </Flex>
      </CardContent>
    </Card>
  );
};
