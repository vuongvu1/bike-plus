import React from "react";
import { Flex } from "../Flex";
import { ProductTile } from "../ProductTile";
import { SkeletonCard } from "../SkeletonCard";
import { MockDataContext } from "../../contexts/MockDataContext";
import { useMockLoading } from "../../hooks/useMockLoading";

export const ProductListing: React.FC = () => {
  const {
    data: { filteredProducts },
  } = React.useContext(MockDataContext);

  const [isLoading, startLoading] = useMockLoading(1000);

  // Fake loading when new filteredProducts is set
  React.useEffect(() => {
    startLoading();
  }, [startLoading, filteredProducts]);

  return isLoading || !filteredProducts ? (
    <Flex gap="var(--spacing-md)">
      <SkeletonCard numOfLines={3} />
      <SkeletonCard numOfLines={3} />
      <SkeletonCard numOfLines={3} />
    </Flex>
  ) : (
    <Flex gap="var(--spacing-md)" wrap="wrap" justify="flex-start">
      {filteredProducts.map((product) => (
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
