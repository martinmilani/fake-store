import React, {useState, useEffect} from "react";
import {Stack} from "@chakra-ui/react";

import {getProducts} from "../../../services/productsService";

import ProductSkeleton from "./ProductSkeleton";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchProducts() {
    try {
      const response = await getProducts();
      const data = await response.data;

      setProducts(data);
      setIsLoaded(true);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const listProducts = products.map((product, index) => {
    return <ProductCard key={index} product={product} />;
  });

  const skeletons = [1, 2, 3, 4];
  const skeletonList = skeletons.map((index) => {
    return <ProductSkeleton key={index} />;
  });

  return (
    <Stack direction={"row"} flex="1" justify="space-around" width={"100%}"} wrap="wrap">
      {!isLoaded ? skeletonList : listProducts}
    </Stack>
  );
}

export default ProductList;
