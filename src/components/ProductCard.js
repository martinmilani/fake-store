import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Spacer,
} from "@chakra-ui/react";

function ProductCard({product}) {
  const IMAGE = product.image;

  return (
    <Center py={12}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"xl"}
        h={"450px"}
        maxW={"220px"}
        p={6}
        pos={"relative"}
        role={"group"}
        rounded={"lg"}
        w={"full"}
        zIndex={1}
      >
        <Box>
          <Image height={230} objectFit={"contain"} rounded={"lg"} src={IMAGE} width={282} />
        </Box>
        <Stack align={"center"} pt={10}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {product.category}
          </Text>
          <Box>
            <Heading fontFamily={"body"} fontSize={"md"} fontWeight={500}>
              <Text isTruncated align={"center"} h={75} whiteSpace={"wrap"}>
                {product.title}
              </Text>
            </Heading>
          </Box>
          <Stack align={"center"} direction={"row"}>
            <Text fontSize={"xl"} fontWeight={800}>
              ${product.price}
            </Text>
          </Stack>
        </Stack>
      </Box>
      <Spacer />
    </Center>
  );
}

export default ProductCard;
