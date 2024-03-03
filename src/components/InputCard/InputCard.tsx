import React from "react";
import { Card, CardContent } from "../Card";
import { CurrentUserAvatar } from "../CurrentUserAvatar";
import { TextInput } from "../TextInput";
import { IconButton } from "../IconButton";
import { Flex } from "../Flex";
import { SendIcon } from "../../assets/icons/SendIcon";

type Props = {
  onPostNewFeed: (value: string) => void;
};

export const InputCard: React.FC<Props> = ({ onPostNewFeed }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue) {
      onPostNewFeed(inputValue);
      setInputValue("");
    }
  };

  return (
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
  );
};
