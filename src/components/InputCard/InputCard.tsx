import React from "react";
import { Card, CardContent } from "../Card";
import { Avatar } from "../Avatar";
import { TextInput } from "../TextInput";
import { IconButton } from "../IconButton";
import { Flex } from "../Flex";
import { SendIcon } from "../../assets/icons/SendIcon";

type InputCardProps = {
  avatarSrc: string;
  avatarAlt: string;
  onPostNewFeed: (value: string) => void;
};

export const InputCard: React.FC<InputCardProps> = ({
  avatarSrc,
  avatarAlt,
  onPostNewFeed,
}) => {
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
            <Avatar src={avatarSrc} alt={avatarAlt} />
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
