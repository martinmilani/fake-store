import React from "react";
import {Container} from "@chakra-ui/react";

import CheckoutTable from "./components/CheckoutTable";

function index() {
  return (
    <Container h={"100vh"} maxW="container.lg">
      <CheckoutTable />
      <p>Checkout Form</p>
    </Container>
  );
}

export default index;
