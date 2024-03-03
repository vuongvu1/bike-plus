import React from "react";
import { MockDataContext } from "../../contexts/MockDataContext";
import { Avatar } from "../Avatar";
import { UserAvatar } from "../UserAvatar";

type Props = {
  hideName?: boolean;
};

export const CurrentUserAvatar: React.FC<Props> = ({ hideName }) => {
  const { user } = React.useContext(MockDataContext);

  return hideName ? (
    <Avatar src={user.avatar} alt={user.name} />
  ) : (
    <UserAvatar src={user.avatar} alt={user.name} username={user.name} />
  );
};
