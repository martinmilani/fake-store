import React, {useState} from "react";
import {Button, Flex, Text, Heading, IconButton} from "@chakra-ui/react";
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";

function NavBar() {
  const [display, setDisplay] = useState("none");

  return (
    <Flex bgColor={"white"}>
      <Flex align={"center"} justify={"space-between"} px={4} top={"0.5rem"} w={"100%"}>
        <Flex>
          <Heading as={"h3"} fontSize={{base: "md", md: "lg"}} my={6} size={"md"} w={"100%"}>
            <Text as={"span"}>Fake </Text>
            <Text as={"span"} color={"green.400"}>
              Store
            </Text>
          </Heading>
        </Flex>
        <Flex display={["none", "none", "flex", "flex"]}>
          <Button aria-label={"Home"} as="a" my={5} variant={"ghost"}>
            Home
          </Button>
          <Button aria-label={"SignUp"} as="a" my={5} variant={"ghost"}>
            Sign Up
          </Button>
          <Button aria-label={"SignIn"} as={"a"} bgColor={"green.400"} color={"white"} my={5}>
            Sign In
          </Button>
        </Flex>
        <IconButton
          aria-label="Open-Menu"
          display={["flex", "flex", "none", "none"]}
          icon={<HamburgerIcon variant={"ghost"} />}
          mr={2}
          size={"lg"}
          onClick={() => setDisplay("flex")}
        />
      </Flex>
      <Flex
        bgColor={"gray.50"}
        display={display}
        flexDir={"column"}
        h={"100vh"}
        left={0}
        overflow={"auto"}
        position={"fixed"}
        top={0}
        w={"100vw"}
        zIndex={20}
      >
        <Flex justify={"flex-end"}>
          <IconButton
            aria-label={"Close Menu"}
            icon={<CloseIcon />}
            mr={6}
            mt={2}
            size={"lg"}
            onClick={() => setDisplay("none")}
          />
        </Flex>
        <Flex align={"center"} flexDir={"column"}>
          <Button aria-label={"Home"} as="a" fontSize={"2xl"} my={5} variant={"ghost"} w={"100%"}>
            Home
          </Button>
          <Button aria-label={"SignIn"} as="a" fontSize={"2xl"} my={5} variant={"ghost"} w={"100%"}>
            Sign In
          </Button>
          <Button aria-label={"SignUp"} as="a" fontSize={"2xl"} my={5} variant={"ghost"} w={"100%"}>
            Sign Up
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NavBar;
