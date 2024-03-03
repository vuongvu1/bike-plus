import React from "react";
import { Card, CardContent } from "../Card";
import { CurrentUserAvatar } from "../CurrentUserAvatar";
import { MockDataContext } from "../../contexts/MockDataContext";
import { TextInput } from "../TextInput";
import { IconButton } from "../IconButton";
import { SkeletonCard } from "../SkeletonCard";
import { Flex } from "../Flex";
import { SendIcon } from "../../assets/icons/SendIcon";

export const InputCard: React.FC = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [fakeLoading, setFakeLoading] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setFakeLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const {
    addFeed,
    data: { user },
  } = React.useContext(MockDataContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue) {
      return;
    }
    setFakeLoading(true);
    setInputValue("");

    setTimeout(() => {
      setFakeLoading(false);
      addFeed({
        id: Math.random().toString(),
        content: inputValue,
        user,
        likes: 0,
        comments: 0,
      });
    }, 1000);
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
              <IconButton icon={<SendIcon />} />
            </Flex>
          </form>
        </CardContent>
      </Card>
      {fakeLoading && <SkeletonCard numOfLines={2} />}
    </>
  );
};
