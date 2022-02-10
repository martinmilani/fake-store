import React, {useState} from "react";
import {Link as WouterLink, useLocation} from "wouter";
import {Button, Flex, Text, Heading, IconButton, HStack, Box} from "@chakra-ui/react";
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";
import {BsCart3} from "react-icons/bs";
import {useSelector} from "react-redux";

import {getTotalQuantity} from "../redux/basketSlice";

function NavBar() {
  const [display, setDisplay] = useState("none");
  const [location, setLocation] = useLocation();
  const totalQuantity = useSelector(getTotalQuantity);

  const navigate = (route) => {
    setLocation(route);
  };

  return (
    <Flex bgColor={"white"}>
      <Flex align={"center"} justify={"space-between"} px={4} top={"0.5rem"} w={"100%"}>
        <WouterLink href="/">
          <Flex cursor={"pointer"}>
            <Heading as={"h3"} fontSize={{base: "md", md: "lg"}} my={6} size={"md"} w={"100%"}>
              <Text as={"span"}>Fake </Text>
              <Text as={"span"} color={"green.400"}>
                Store
              </Text>
            </Heading>
          </Flex>
        </WouterLink>
        <HStack align={"center"} spacing={2}>
          <Box>
            <Button
              colorScheme="whatsapp"
              leftIcon={<BsCart3 size={"1.5rem"} />}
              my={5}
              variant={"ghost"}
              onClick={() => navigate("/cart")}
            >
              ({totalQuantity}) Items
            </Button>
          </Box>
          <HStack display={["none", "none", "flex", "flex"]}>
            <Button
              aria-label={"Home"}
              as="a"
              my={5}
              variant={"ghost"}
              onClick={() => navigate("/")}
            >
              Home
            </Button>
            <Button aria-label={"SignUp"} as="a" my={5} variant={"ghost"}>
              Sign Up
            </Button>
            <Button aria-label={"SignIn"} as={"a"} bgColor={"green.400"} color={"white"} my={5}>
              Sign In
            </Button>
          </HStack>
          <IconButton
            aria-label="Open-Menu"
            display={["flex", "flex", "none", "none"]}
            icon={<HamburgerIcon variant={"ghost"} />}
            mr={2}
            size={"lg"}
            onClick={() => setDisplay("flex")}
          />
        </HStack>
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
          <WouterLink href="/" onClick={() => setDisplay("none")}>
            <Button
              aria-label={"Home"}
              as="a"
              fontSize={"2xl"}
              h={"100%"}
              py={10}
              variant={"ghost"}
              w={"100%"}
            >
              Home
            </Button>
          </WouterLink>
          <Button
            aria-label={"SignIn"}
            as="a"
            fontSize={"2xl"}
            h={"100%"}
            py={10}
            variant={"ghost"}
            w={"100%"}
          >
            Sign In
          </Button>
          <Button
            aria-label={"SignUp"}
            as="a"
            fontSize={"2xl"}
            h={"100%"}
            py={10}
            variant={"ghost"}
            w={"100%"}
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NavBar;
