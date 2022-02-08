import {Container} from "@chakra-ui/react";
import React from "react";

import ProductsList from "./components/ProductsList";
import Title from "./components/Title";

function index() {
  return (
    <>
      <Container maxW="container.lg">
        <Title />
        <ProductsList />
      </Container>
    </>
  );
}

export default index;
