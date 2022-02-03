import React from "react";
import {Center, Heading, Text} from "@chakra-ui/react";

function Footer() {
  return (
    <Center bgColor={"gray.800"} w={"100%"}>
      <Heading as={"h5"} fontSize={{base: "md", md: "lg"}} my={{base: 20}} size={"md"}>
        <Text as={"span"} color={"white"}>
          Fake{" "}
        </Text>
        <Text as={"span"} color={"green.400"}>
          Store
        </Text>
      </Heading>
    </Center>
  );
}

export default Footer;
