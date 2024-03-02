import React from "react";
import { Avatar } from "../Avatar";
import { Typography } from "../Typography";
import styles from "./UserAvatar.module.css";

type UserAvatarProps = {
  src: string;
  alt: string;
  username: string;
};

export const UserAvatar: React.FC<UserAvatarProps> = ({
  src,
  alt,
  username,
}) => {
  return (
    <div className={styles.userAvatar}>
      <Avatar src={src} alt={alt} />
      <span className={styles.username}>
        <Typography variant="span">{username}</Typography>
      </span>
    </div>
  );
};
