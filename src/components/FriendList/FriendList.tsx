import React from "react";
import { Flex } from "../Flex";
import { Typography } from "../Typography";
import { UserAvatar } from "../UserAvatar";
import { MockDataContext } from "../../contexts/MockDataContext";
import SampleAvatar from "../../assets/images/sample-avatar.webp";

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
        <UserAvatar src={SampleAvatar} alt="User Name" username="User Name" />
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
