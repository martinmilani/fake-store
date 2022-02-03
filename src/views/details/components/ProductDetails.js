import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import React, {useState, useEffect} from "react";

import {getProductsDetails} from "../../../services/detailsService";

import DetailSkeleton from "./DetailSkeleton";
import Rating from "./Rating";

export default function ProductDetails({id}) {
  const [productDetails, setProductsDetails] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchProductsDetails() {
      try {
        const response = await getProductsDetails(id);
        const data = await response.data;

        setProductsDetails(data);
        setIsLoaded(true);
      } catch (error) {
        alert(error);
      }
    }
    fetchProductsDetails();
  }, [id]);

  const Details = () => {
    return (
      <>
        <Container maxW={"7xl"}>
          <SimpleGrid
            columns={{base: 1, lg: 2}}
            py={{base: 12, md: 24}}
            spacing={{base: 8, md: 10}}
          >
            <Flex>
              <Image
                align={"center"}
                alt={"product image"}
                fit={"contain"}
                h={{base: "100%", sm: "400px", lg: "500px"}}
                rounded={"md"}
                src={productDetails.image}
                w={"100%"}
              />
            </Flex>
            <Stack my={{base: 8}} spacing={{base: 6, md: 8}}>
              <Box as={"header"}>
                <Heading
                  fontSize={{base: "2xl", sm: "4xl", lg: "5xl"}}
                  fontWeight={600}
                  lineHeight={1.1}
                >
                  {productDetails.title}
                </Heading>
                <Rating
                  numReviews={productDetails.rating.count}
                  rating={productDetails.rating.rate}
                />
                <Text
                  color={useColorModeValue("gray.900", "gray.400")}
                  fontSize={"3xl"}
                  fontWeight={600}
                  pt={4}
                >
                  ${productDetails.price}
                </Text>
              </Box>
              <Stack
                direction={"column"}
                divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />}
                spacing={{base: 4, sm: 6}}
              >
                <VStack spacing={{base: 4, sm: 6}}>
                  <Box display={"flex"} w={"100%"}>
                    <Badge colorScheme="green" px={"2"} rounded="full">
                      {productDetails.category}
                    </Badge>
                  </Box>
                  <Text fontSize={"lg"}>{productDetails.description}</Text>
                </VStack>
                <Box />
              </Stack>

              <Button
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
                bgColor={"green.400"}
                color={"white"}
                mt={8}
                py={7}
                rounded={"full"}
                size={"lg"}
                textTransform={"uppercase"}
                w={"full"}
              >
                Add to cart
              </Button>
            </Stack>
          </SimpleGrid>
        </Container>
      </>
    );
  };

  if (!isLoaded) {
    return <DetailSkeleton />;
  } else {
    return <Details />;
  }
}
