import React from "react";
import { MockDataContext } from "../../contexts/MockDataContext";
import { FeedCard } from "../FeedCard";

export const NewFeeds: React.FC = () => {
  const { feeds } = React.useContext(MockDataContext);

  return feeds.map((feed) => <FeedCard key={feed.id} feed={feed} />);
};
