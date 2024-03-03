import React from "react";
import { Card, CardContent } from "../Card";
// import { MockDataContext } from "../../contexts/MockDataContext";
import { TextInput } from "../TextInput";
import { IconButton } from "../IconButton";
import { Flex } from "../Flex";
import { SearchIcon } from "../../assets/icons/SearchIcon";

export const SearchInput: React.FC = () => {
  const [inputValue, setInputValue] = React.useState("");

  // const {
  //   addFeed,
  // } = React.useContext(MockDataContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue) {
      return;
    }
    setInputValue("");
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Flex align="center" gap="var(--spacing-sm)">
            <TextInput
              value={inputValue}
              onChange={setInputValue}
              placeholder="Search on Marketplace"
            />
            <IconButton icon={<SearchIcon />} />
          </Flex>
        </form>
      </CardContent>
    </Card>
  );
};
