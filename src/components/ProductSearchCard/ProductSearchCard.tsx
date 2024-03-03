import React from "react";
import { Card, CardContent } from "../Card";
import { MockDataContext } from "../../contexts/MockDataContext";
import { TextInput } from "../TextInput";
import { IconButton } from "../IconButton";
import { Flex } from "../Flex";
import { throttle } from "../../utils/throttle";
import { SearchIcon } from "../../assets/icons/SearchIcon";

export const ProductSearchCard: React.FC = () => {
  const [inputValue, setInputValue] = React.useState("");

  const { filterProduct } = React.useContext(MockDataContext);

  const throttledFilterProduct = React.useMemo(
    () => throttle(filterProduct, 500),
    [filterProduct]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    filterProduct(inputValue);
  };

  const handleChange = (text: string) => {
    setInputValue(text);
    throttledFilterProduct(text);
  };

  React.useEffect(() => {
    return () => {
      filterProduct("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Flex align="center" gap="var(--spacing-sm)">
            <TextInput
              value={inputValue}
              onChange={handleChange}
              placeholder="Search on Marketplace"
            />
            <IconButton icon={<SearchIcon />} />
          </Flex>
        </form>
      </CardContent>
    </Card>
  );
};
