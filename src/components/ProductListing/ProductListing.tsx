import React from "react";
import { Flex } from "../Flex";
import { ProductTile } from "../ProductTile";
import { MockDataContext } from "../../contexts/MockDataContext";

export const ProductListing: React.FC = () => {
  const {
    data: { products },
  } = React.useContext(MockDataContext);

  return (
    <Flex gap="var(--spacing-md)" wrap="wrap" justify="flex-start">
      {products?.map((product) => (
        <ProductTile
          key={product.id}
          src={product.media}
          alt={product.name}
          name={product.name}
          price={product.price}
        />
      ))}
    </Flex>
  );
};
