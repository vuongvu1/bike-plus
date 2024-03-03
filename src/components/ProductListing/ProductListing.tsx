import React from "react";
import { Flex } from "../Flex";
import { ProductTile } from "../ProductTile";
import { SkeletonCard } from "../SkeletonCard";
import { MockDataContext } from "../../contexts/MockDataContext";
import { useMockLoading } from "../../hooks/useMockLoading";

export const ProductListing: React.FC = () => {
  const {
    data: { products },
  } = React.useContext(MockDataContext);

  const [isLoading] = useMockLoading();

  return isLoading || !products ? (
    <Flex gap="var(--spacing-md)">
      <SkeletonCard numOfLines={3} />
      <SkeletonCard numOfLines={3} />
      <SkeletonCard numOfLines={3} />
    </Flex>
  ) : (
    <Flex gap="var(--spacing-md)" wrap="wrap" justify="flex-start">
      {products.map((product) => (
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
