import {
  Button,
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Stack,
  StackDivider,
  Select,
} from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons";
import {useDispatch, useSelector} from "react-redux";

import {deleteFromBasket, getTotalAmount} from "../../../redux/basketSlice";

function ItemsList({basket}) {
  const dispatch = useDispatch();
  const totalAmount = useSelector(getTotalAmount);

  const renderItems = basket.map((item, index) => {
    return (
      <Box key={index} bgColor={"white"} flexDirection={"column"}>
        <Flex flexDirection={"row"} my={4}>
          <Flex flex={1} justifyContent={"space-around"}>
            <Box w={"20%"}>
              <Image
                alt={item.title}
                boxSize={"85%"}
                maxH="130px"
                objectFit="contain"
                src={item.image}
              />
            </Box>
            <Box w={"70%"}>
              <Stack spacing={"2em"}>
                <Heading fontSize={["md", "xl"]}>{item.title}</Heading>
                <Flex alignItems="flex-end" justifyContent={"space-between"}>
                  <Flex flexDirection={"column"} justifyContent={"space-between"}>
                    <Flex alignItems="center" flexDirection="row">
                      <Select>
                        <option value="1">1</option>
                        <option value="option2">2</option>
                        <option value="option3">3</option>
                      </Select>
                      <Text fontSize={["md", "xl"]} ml={2}>
                        u.
                      </Text>
                    </Flex>
                    <Text fontSize={["md", "xl"]} fontWeight={600} mt={"0.5rem"} pr={4}>
                      ${item.quantity * item.price}
                    </Text>
                  </Flex>
                  <Button
                    colorScheme="red"
                    leftIcon={<DeleteIcon />}
                    size="sm"
                    variant="outline"
                    onClick={() => dispatch(deleteFromBasket(item))}
                  >
                    Delete
                  </Button>
                </Flex>
              </Stack>
            </Box>
          </Flex>
        </Flex>
      </Box>
    );
  });

  return (
    <Flex flexDirection={"column"} minH="100vh" mt={8}>
      <Stack bgColor="white" direction={"column"} divider={<StackDivider borderColor="gray.200" />}>
        {renderItems}
      </Stack>
      <Flex bgColor="white" flexDirection="column" px={8} py={8}>
        <Flex justifyContent="space-between">
          <Text align="start" fontSize={["xl", "3xl"]} fontWeight="bold" py={4}>
            Total:
          </Text>
          <Text align="end" fontSize={["xl", "3xl"]} fontWeight="bold" py={4}>
            ${totalAmount}
          </Text>
        </Flex>
        <Button bgColor="green.400" color="white" rounded="md">
          <Text fontSize="xl"> Continue to Checkout</Text>
        </Button>
      </Flex>
    </Flex>
  );
}

export default ItemsList;
