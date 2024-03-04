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
import { CloseIcon } from "../../assets/icons/CloseIcon";
import { FeedType } from "../../contexts/MockDataContext";

type Props = {
  feed: FeedType;
  onClose?: () => void;
};

export const FeedCard: React.FC<Props> = ({ feed, onClose }) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [addedComments, setAddedComments] = React.useState(0);

  if (!feed) return <div>empty</div>;

  const { content, media, user, likes = 0, comments = 0 } = feed;
  const totalLikes = likes + (isLiked ? 1 : 0);
  const totalComments = comments + addedComments;

  return (
    <Card>
      <CardContent>
        <Flex direction="column" gap="var(--spacing-md)">
          <Flex justify="space-between">
            <UserAvatar
              src={user.avatar}
              alt={user.name}
              username={user.name}
            />
            {onClose && <IconButton icon={<CloseIcon />} onClick={onClose} />}
          </Flex>
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
              {totalComments} comment{totalComments > 1 ? "s" : ""}
            </Typography>
          </Flex>
          <Flex justify="space-between">
            <Flex gap="var(--spacing-sm)">
              <IconButton
                onClick={() => setIsLiked(!isLiked)}
                title={isLiked ? "Unlike" : "Like"}
                icon={
                  isLiked ? (
                    <LoveFilledIcon fill="var(--primary-color)" />
                  ) : (
                    <LoveIcon />
                  )
                }
              />
              <IconButton
                icon={<CommentIcon />}
                title="Comment"
                onClick={() => setAddedComments(addedComments + 1)}
              />
            </Flex>
            <IconButton icon={<BookmarkIcon />} title="Bookmark" />
          </Flex>
        </Flex>
      </CardContent>
    </Card>
  );
};
