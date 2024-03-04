import React from "react";
import { Flex } from "../Flex";
import { Card, CardContent } from "../Card";
import { FriendIcon } from "../../assets/icons/FriendIcon";
import { GroupIcon } from "../../assets/icons/GroupIcon";
import { EventIcon } from "../../assets/icons/EventIcon";
import { BookmarkIcon } from "../../assets/icons/BookmarkIcon";

const iconLabelMap = [
  { label: "Find friends", icon: <FriendIcon /> },
  { label: "Groups", icon: <GroupIcon /> },
  { label: "Events", icon: <EventIcon /> },
  { label: "Saved", icon: <BookmarkIcon /> },
];

export const SideNavigation: React.FC = () => (
  <Flex direction="column" gap="var(--spacing-sm)">
    {iconLabelMap.map(({ label, icon }) => (
      <Card key={label}>
        <CardContent>
          <Flex align="center" gap="var(--spacing-sm)">
            {icon} {label}
          </Flex>
        </CardContent>
      </Card>
    ))}
  </Flex>
);
