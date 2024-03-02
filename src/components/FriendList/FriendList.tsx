import React from "react";
import { Flex } from "../Flex";
import { Typography } from "../Typography";
import { UserAvatar } from "../UserAvatar";
import { MockDataContext } from "../../contexts/MockDataContext";

export const FriendList: React.FC = () => {
  const { friends } = React.useContext(MockDataContext);

  return (
    <Flex direction="column" gap="var(--spacing-sm)">
      <Typography variant="h2">Friend List</Typography>
      {friends.map((friend) => (
        <UserAvatar
          key={friend.id}
          src={friend.avatar}
          alt={friend.name}
          username={friend.name}
        />
      ))}
    </Flex>
  );
};
