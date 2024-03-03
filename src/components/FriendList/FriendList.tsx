import React from "react";
import { Flex } from "../Flex";
import { Typography } from "../Typography";
import { UserAvatar } from "../UserAvatar";
import { MockDataContext } from "../../contexts/MockDataContext";
import { SkeletonCard } from "../SkeletonCard";

export const FriendList: React.FC = () => {
  const {
    data: { friends },
  } = React.useContext(MockDataContext);

  const isLoading = !friends;

  return (
    <Flex direction="column" gap="var(--spacing-sm)">
      <Typography variant="h3" color="var(--text-color-lighter)">
        Friend List
      </Typography>
      {isLoading ? (
        <>
          <SkeletonCard numOfLines={0} />
          <SkeletonCard numOfLines={0} />
        </>
      ) : (
        friends.map((friend) => (
          <UserAvatar
            key={friend.id}
            src={friend.avatar}
            alt={friend.name}
            username={friend.name}
          />
        ))
      )}
    </Flex>
  );
};
