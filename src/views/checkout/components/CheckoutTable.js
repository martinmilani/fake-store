import React from "react";
import {Box, Table, Thead, Tbody, Tr, Th, Td, Text, Image, HStack} from "@chakra-ui/react";
import {useSelector} from "react-redux";

import {getTotalAmount} from "../../../redux/basketSlice";

function CheckoutTable() {
  const {basket} = useSelector((state) => state.basket);
  //const dispatch = useDispatch();
  const totalAmount = useSelector(getTotalAmount);

  const renderTable = basket.map((item, index) => {
    return (
      <Tr key={index}>
        <Td px={0}>
          <HStack w={"100%"}>
            <Box ml={"0.5em"} w={"30%"}>
              <Image
                alt={item.title}
                boxSize={["48px", "100px"]}
                objectFit="contain"
                src={item.image}
              />
            </Box>
            <Box maxH={"60px"} maxW={"100px"} overflow={"hidden"} w={"70%"}>
              <Text fontSize={["xs", "sm", "md"]}>{item.title}</Text>{" "}
            </Box>
          </HStack>
        </Td>
        <Td isNumeric>x{item.quantity}</Td>
        <Td isNumeric>${item.quantity * item.price}</Td>
      </Tr>
    );
  });

  return (
    <Table bgColor={"white"} rounded={"md"} variant="simple">
      <Thead>
        <Tr>
          <Th>Title</Th>
          <Th isNumeric>Quantity</Th>
          <Th isNumeric>Price</Th>
        </Tr>
      </Thead>
      <Tbody>
        {renderTable}
        <Tr>
          <Td />
          <Td />
          <Td isNumeric>
            <Text fontWeight={"bold"}>Total: ${totalAmount}</Text>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

export default CheckoutTable;
