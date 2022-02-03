import {Container} from "@chakra-ui/react";
import React from "react";

import ProductList from "./components/ProductList";
import Title from "./components/Title";

function index() {
  return (
    <>
      <Container maxW="container.lg">
        <Title />
        <ProductList />
      </Container>
    </>
  );
}

export default index;
