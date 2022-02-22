import {
  Button,
  Box,
  Divider,
  Flex,
  Image,
  Text,
  Heading,
  Stack,
  StackDivider,
  Select,
} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {Link as WouterLink} from "wouter";

import {changeQuantity, deleteFromBasket, getTotalAmount} from "../../../redux/basketSlice";

function ItemsList({basket}) {
  const dispatch = useDispatch();
  const totalAmount = useSelector(getTotalAmount);
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const makeOptions = (item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  };

  const renderItems = basket.map((item, index) => {
    return (
      <Box key={index} flexDirection={"column"} px={[2, 8]} py={3}>
        <Flex justifyContent="space-between">
          <Image alt={item.title} boxSize="48px" objectFit="contain" src={item.image} />
          <Flex direction="row" justifyContent="space-between" w="100%">
            <Flex alignItems="center" ml={3} w="50%">
              <Heading fontSize={["md", "xl"]}>{item.title}</Heading>
            </Flex>
            <Flex alignItems="center" flexDirection="column">
              <Flex>
                <Text fontSize={["sm", "md"]}>Quantity</Text>
              </Flex>
              <Select
                value={item.quantity}
                onChange={(e) => dispatch(changeQuantity({item: item, quantity: e.target.value}))}
              >
                {options.map(makeOptions)}
              </Select>
            </Flex>
            <Text fontSize={["md", "xl"]} fontWeight={600} mt={"0.5rem"}>
              ${item.quantity * item.price}
            </Text>
          </Flex>
        </Flex>
        <Button
          colorScheme="red"
          mt={2}
          p={2}
          variant="ghost"
          onClick={() => dispatch(deleteFromBasket(item))}
        >
          Delete
        </Button>
      </Box>
    );
  });

  return (
    <Box minH="100vh">
      <Flex
        bgColor="white"
        border="1px"
        borderColor="gray.100"
        flexDirection={"column"}
        mt={8}
        py={2}
        rounded="md"
      >
        <Stack direction={"column"} divider={<StackDivider borderColor="gray.200" />}>
          {renderItems}
        </Stack>
        <Divider border="1px" borderColor="gray.200" />
        <Flex alignItems={["center", "flex-end"]} bgColor="white" flexDirection="column" px={8}>
          <Flex justifyContent="flex-end">
            <Text align="start" fontSize={["xl", "3xl"]} fontWeight="bold" py={4}>
              Total:
            </Text>
            <Text align="end" fontSize={["xl", "3xl"]} fontWeight="bold" ml={10} py={4}>
              ${totalAmount}
            </Text>
          </Flex>
          <Flex justifyContent="flex-end" mb={6}>
            <WouterLink href="/checkout">
              <Button bgColor="green.400" color="white" rounded="md">
                <Text fontSize="xl"> Continue to Checkout</Text>
              </Button>
            </WouterLink>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ItemsList;
