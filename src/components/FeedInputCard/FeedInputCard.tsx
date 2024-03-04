import React from "react";
import { Card, CardContent } from "../Card";
import { CurrentUserAvatar } from "../CurrentUserAvatar";
import { MockDataContext } from "../../contexts/MockDataContext";
import { TextInput } from "../TextInput";
import { IconButton } from "../IconButton";
import { SkeletonCard } from "../SkeletonCard";
import { Flex } from "../Flex";
import { SendIcon } from "../../assets/icons/SendIcon";
import { useMockLoading } from "../../hooks/useMockLoading";

export const FeedInputCard: React.FC = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, startLoading] = useMockLoading();

  const {
    addFeed,
    data: { user },
  } = React.useContext(MockDataContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue) {
      return;
    }

    setInputValue("");
    startLoading(() => {
      addFeed({
        id: Math.random().toString(),
        content: inputValue,
        user,
        likes: 0,
        comments: 0,
      });
    });
  };

  return (
    <>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Flex align="center" gap="var(--spacing-sm)">
              <CurrentUserAvatar hideName />
              <TextInput
                value={inputValue}
                onChange={setInputValue}
                placeholder="What is on your mind?"
              />
              <IconButton icon={<SendIcon />} title="Add a new post" />
            </Flex>
          </form>
        </CardContent>
      </Card>
      {isLoading && <SkeletonCard numOfLines={2} />}
    </>
  );
};
