import React from "react";
import { MockDataContext } from "../../contexts/MockDataContext";
import { FeedCard } from "../FeedCard";
import { SkeletonCard } from "../SkeletonCard";
import { useMockLoading } from "../../hooks/useMockLoading";

export const NewFeeds: React.FC = () => {
  const {
    deleteFeed,
    data: { feeds, user: currentUser },
  } = React.useContext(MockDataContext);

  const [isLoading] = useMockLoading(1000);

  return isLoading || !feeds ? (
    <>
      <SkeletonCard />
      <SkeletonCard numOfLines={2} />
      <SkeletonCard numOfLines={4} />
      <SkeletonCard numOfLines={2} />
    </>
  ) : (
    feeds.map((feed) => (
      <FeedCard
        key={feed.id}
        feed={feed}
        onClose={
          feed.user.id === currentUser.id ? () => deleteFeed(feed) : undefined
        }
      />
    ))
  );
};
