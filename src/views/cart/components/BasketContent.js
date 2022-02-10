import React from "react";
import {Heading, Box, Flex, Text} from "@chakra-ui/react";
import {useSelector} from "react-redux";

import {getTotalQuantity} from "../../../redux/basketSlice";

import ItemsList from "./ItemsList";

function BasketContent() {
  const {basket} = useSelector((state) => state.basket);
  const totalQuantity = useSelector(getTotalQuantity);

  const NoItems = () => {
    return (
      <Box h={"100vh"}>
        <Flex justifyContent={"center"} pt={24} px={8}>
          <Heading as="h1" size="2xl">
            <Text align={"center"}>Your shopping cart is empty.</Text>
          </Heading>
        </Flex>
      </Box>
    );
  };

  if (totalQuantity === 0) {
    return <NoItems />;
  } else {
    return <ItemsList basket={basket} />;
  }
}

export default BasketContent;
