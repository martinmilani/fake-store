import React from "react";
import {Container} from "@chakra-ui/react";

import ProductDetails from "./components/ProductDetails";
function index() {
  return (
    <Container maxW="container.lg">
      <ProductDetails />
    </Container>
  );
}

export default index;
