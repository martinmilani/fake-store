import {Heading, Text, Stack, Box} from "@chakra-ui/react";

function Title() {
  return (
    <Stack as={Box} py={{base: 20, md: 36}} spacing={{base: 8, md: 14}} textAlign={"center"}>
      <Heading fontSize={{base: "4xl", md: "6xl"}} fontWeight={600} lineHeight={"110%"}>
        <Text as={"span"}>Fake </Text>
        <Text as={"span"} color={"green.400"}>
          Store
        </Text>
      </Heading>
    </Stack>
  );
}

export default Title;
