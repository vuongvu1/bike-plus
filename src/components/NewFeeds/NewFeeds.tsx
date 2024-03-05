import {
  useEffect,
  useState,
  useRef,
  FC,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { MockDataContext } from "../../contexts/MockDataContext";
import { FeedCard } from "../FeedCard";
import { SkeletonCard } from "../SkeletonCard";
import { Flex } from "../Flex";
import { useMockLoading } from "../../hooks/useMockLoading";
import { useScrollToEnd } from "../../hooks/useScrollToEnd";
import { debounce } from "../../utils/debounce";
import type { FeedType } from "../../contexts/MockDataContext";

const FEED_STEP = 3;

export const NewFeeds: FC = () => {
  const [showingFeeds, setShowingFeeds] = useState<FeedType[]>([]);
  const [isOutOfFeeds, setIsOutOfFeeds] = useState(false);
  const feedRangeRef = useRef({ start: 0, end: FEED_STEP });
  const {
    deleteFeed,
    data: { feeds: allFeeds, user: currentUser },
  } = useContext(MockDataContext);

  const [isPageLoading] = useMockLoading();
  const [isGettingNewFeeds, startGettingNewFeeds] = useMockLoading();

  const isFeedsReady = !isPageLoading && allFeeds;

  const increaseShowingFeeds = useCallback(() => {
    const maxFeed = allFeeds.length;
    const { start, end } = feedRangeRef.current;

    // Reach the end of feeds
    if (start === end && end === maxFeed) {
      setIsOutOfFeeds(true);
      return;
    }

    startGettingNewFeeds(() => {
      // Append new feeds to showingFeeds
      setShowingFeeds((currentFeeds) =>
        currentFeeds.length > start
          ? currentFeeds
          : currentFeeds.concat(allFeeds.slice(start, end))
      );

      // Update feed range
      feedRangeRef.current.start = feedRangeRef.current.end;
      feedRangeRef.current.end += FEED_STEP;

      if (feedRangeRef.current.end > maxFeed) {
        feedRangeRef.current.end = maxFeed;
      }
    });
  }, [allFeeds, startGettingNewFeeds]);

  const debouncedSetShowingFeeds = useMemo(
    () => debounce(increaseShowingFeeds, 500),
    [increaseShowingFeeds]
  );

  useScrollToEnd(debouncedSetShowingFeeds);

  // Set initial showingFeeds
  useEffect(() => {
    if (isFeedsReady) {
      increaseShowingFeeds();
    }
  }, [isFeedsReady, increaseShowingFeeds]);

  if (!isFeedsReady) {
    return (
      <>
        <SkeletonCard />
        <SkeletonCard numOfLines={2} />
        <SkeletonCard numOfLines={4} />
      </>
    );
  }

  return (
    <>
      {showingFeeds.map((feed) => (
        <FeedCard
          key={feed.id}
          feed={feed}
          onClose={
            feed.user.id === currentUser.id ? () => deleteFeed(feed) : undefined
          }
        />
      ))}
      {isGettingNewFeeds && (
        <>
          <SkeletonCard />
          <SkeletonCard numOfLines={2} />
          <SkeletonCard numOfLines={4} />
        </>
      )}
      {isOutOfFeeds && <Flex justify="center">You've caught up!</Flex>}
    </>
  );
};
