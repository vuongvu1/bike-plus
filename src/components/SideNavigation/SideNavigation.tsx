import React from "react";
import { Flex } from "../Flex";
import { Card, CardContent } from "../Card";

export const SideNavigation: React.FC = () => (
  <Flex direction="column" gap="var(--spacing-sm)">
    <Card>
      <CardContent>Find a friend</CardContent>
    </Card>
    <Card>
      <CardContent>Groups</CardContent>
    </Card>
    <Card>
      <CardContent>Events</CardContent>
    </Card>
    <Card>
      <CardContent>Saved</CardContent>
    </Card>
  </Flex>
);
