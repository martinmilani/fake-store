import {Box, Center, useColorModeValue, Heading, Text, Stack, Image} from "@chakra-ui/react";

function ProductCard({product}) {
  const IMAGE = product.image;

  return (
    <Center py={12}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        maxW={"330px"}
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
            Brand
          </Text>
          <Heading fontFamily={"body"} fontSize={"2xl"} fontWeight={500}>
            Nice Chair, pink
          </Heading>
          <Stack align={"center"} direction={"row"}>
            <Text fontSize={"xl"} fontWeight={800}>
              $57
            </Text>
            <Text color={"gray.600"} textDecoration={"line-through"}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default ProductCard;
