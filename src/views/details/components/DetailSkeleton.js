import {
  Box,
  Container,
  Stack,
  Flex,
  VStack,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

function DetailSkeleton() {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid columns={{base: 1, lg: 2}} py={{base: 16, md: 24}} spacing={{base: 8, md: 10}}>
        <Flex>
          <Skeleton
            align={"center"}
            h={{base: "300px", sm: "400px", lg: "500px"}}
            rounded={"md"}
            w={"100%"}
          />
        </Flex>
        <Stack spacing={{base: 6, md: 8}}>
          <Box>
            <Skeleton h={"50px"} maxW={"400px"} />
          </Box>

          <Stack
            direction={"column"}
            divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />}
            spacing={{base: 4, sm: 6}}
          >
            <VStack spacing={{base: 4, sm: 6}}>
              <Box display={"flex"} w={"100%"}>
                <Skeleton h={"30px"} w={"100px"} />
              </Box>
              <Box display={"flex"} flexDirection={"column"} h={"200px"} w={"100%"}>
                <SkeletonText mt="4" noOfLines={6} spacing="4" />
              </Box>
            </VStack>
            <Box />
          </Stack>

          <Box display={"flex"} w={"100%"}>
            <Skeleton h={"50px"} rounded={"full"} w={"100%"} />
          </Box>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default DetailSkeleton;
