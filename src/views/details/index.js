import React from "react";
import {Container} from "@chakra-ui/react";

import ProductDetails from "./components/ProductDetails";
function index({id}) {
  return (
    <Container maxW="container.lg">
      <ProductDetails id={id} />
    </Container>
  );
}

export default index;
