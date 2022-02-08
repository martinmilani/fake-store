import {Stack} from "@chakra-ui/react";
import {useSelector} from "react-redux";

import ProductSkeleton from "./ProductSkeleton";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  const {products} = useSelector((state) => state.products);
  const isLoaded = useSelector((state) => state.products.status);

  const listProducts = products.map((product, index) => {
    return <ProductCard key={index} product={product} />;
  });

  const skeletons = [1, 2, 3, 4];
  const skeletonList = skeletons.map((index) => {
    return <ProductSkeleton key={index} />;
  });

  return (
    <Stack direction={"row"} flex="1" justify="space-around" width={"100%}"} wrap="wrap">
      {isLoaded === "success" ? listProducts : skeletonList}
    </Stack>
  );
}
