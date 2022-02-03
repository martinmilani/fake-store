import React from "react";
import {Link as WouterLink} from "wouter";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Spacer,
  Button,
} from "@chakra-ui/react";

function ProductCard({product}) {
  const IMAGE = product.image;
  const link = `/details/${product.id}`;

  return (
    <Center py={12}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"xl"}
        h={"520px"}
        maxW={"230px"}
        p={6}
        pos={"relative"}
        role={"group"}
        rounded={"lg"}
        w={"full"}
        zIndex={1}
      >
        <WouterLink href={link}>
          <Box>
            <Image height={230} objectFit={"contain"} rounded={"lg"} src={IMAGE} width={282} />
          </Box>
          <Stack align={"center"} pt={10}>
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
        </WouterLink>
        <Center my={4}>
          <Button bgColor={"green.400"} color={"white"} rounded={"full"}>
            Add to cart
          </Button>
        </Center>
      </Box>
      <Spacer />
    </Center>
  );
}

export default ProductCard;
