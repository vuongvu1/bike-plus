import React from "react";
import { MockDataContext } from "../../contexts/MockDataContext";
import { Avatar } from "../Avatar";
import { UserAvatar } from "../UserAvatar";

import SampleAvatar from "../../assets/images/sample-avatar.webp";

type Props = {
  hideName?: boolean;
};

export const CurrentUserAvatar: React.FC<Props> = ({ hideName }) => {
  const {
    data: { user },
  } = React.useContext(MockDataContext);

  if (!user) {
    return <Avatar src={SampleAvatar} alt="sample avatar" />;
  }

  return hideName ? (
    <Avatar src={user.avatar} alt={user.name} />
  ) : (
    <UserAvatar src={user.avatar} alt={user.name} username={user.name} />
  );
};
