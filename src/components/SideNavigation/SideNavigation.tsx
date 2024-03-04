import React from "react";
import { Flex } from "../Flex";
import { FriendIcon } from "../../assets/icons/FriendIcon";
import { GroupIcon } from "../../assets/icons/GroupIcon";
import { EventIcon } from "../../assets/icons/EventIcon";
import { BookmarkIcon } from "../../assets/icons/BookmarkIcon";
import styles from "./SideNavigation.module.css";

const iconLabelMap = [
  { label: "Find friends", icon: <FriendIcon /> },
  { label: "Groups", icon: <GroupIcon /> },
  { label: "Events", icon: <EventIcon /> },
  { label: "Saved", icon: <BookmarkIcon /> },
];

export const SideNavigation: React.FC = () => (
  <div className={styles.container}>
    <Flex direction="column" gap="var(--spacing-md)">
      {iconLabelMap.map(({ label, icon }) => (
        <Flex key={label} align="center" gap="var(--spacing-sm)">
          {icon} {label}
        </Flex>
      ))}
    </Flex>
  </div>
);
