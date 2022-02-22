import {Stack} from "@chakra-ui/react";
import {useSelector} from "react-redux";

import ErrorBanner from "../../../components/ErrorBanner";

import ProductSkeleton from "./ProductSkeleton";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  const {products} = useSelector((state) => state.products);
  const status = useSelector((state) => state.products.status);

  const renderProductsList = products.map((product, index) => {
    return <ProductCard key={index} product={product} />;
  });

  let arr = [1, 2, 3, 4];
  const renderSkeletonList = arr.map((index) => {
    return <ProductSkeleton key={index} />;
  });

  return (
    <>
      {status === "failed" && <ErrorBanner />}
      <Stack direction={"row"} flex="1" justify="space-around" width={"100%}"} wrap="wrap">
        {status === "success" ? renderProductsList : renderSkeletonList}
      </Stack>
    </>
  );
}
