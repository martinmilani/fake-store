import React from "react";
import {Stack} from "@chakra-ui/react";

import {getProducts} from "../services/productsService";

import ProductCard from "./ProductCard";

function ProductList() {
  //const baseURL = "https://fakestoreapi.com/products?limit=12";
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getProducts().then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  }, []);

  const listProducts = products.map((product, index) => {
    return <ProductCard key={index} product={product} />;
  });

  return (
    <Stack direction={"row"} flex="1" justify="space-around" width={"100%}"} wrap="wrap">
      {listProducts}
    </Stack>
  );
}

export default ProductList;
