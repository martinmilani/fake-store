import React, {useState} from "react";
import {Link as WouterLink, useLocation} from "wouter";
import {Button, Flex, Text, Heading, IconButton, HStack, Box} from "@chakra-ui/react";
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";
import {BsCart3} from "react-icons/bs";
import {useSelector} from "react-redux";

import {getTotalQuantity} from "../redux/basketSlice";
import {logout} from "../services/authService";

function NavBar() {
  const [display, setDisplay] = useState("none");
  const [, setLocation] = useLocation();
  const {user} = useSelector((state) => state.user);
  const totalQuantity = useSelector(getTotalQuantity);

  const navigate = (route) => {
    setLocation(route);
  };

  return (
    <Flex bgColor={"white"} borderBottom="1px" borderColor="gray.100">
      <Flex align={"center"} justify={"space-between"} px={4} top={"0.5rem"} w={"100%"}>
        <Flex direction={"column"}>
          <WouterLink href="/">
            <Flex cursor={"pointer"}>
              <Heading as={"h3"} fontSize={{base: "md", md: "lg"}} my={6} size={"md"} w={"100%"}>
                <Text as={"span"}>Fake </Text>
                <Text as={"span"} color={"green.400"}>
                  Store
                </Text>
                {user && (
                  <Text color="gray.400" fontSize="sm" fontWeight={"thin"}>
                    You are login as {user.email}
                  </Text>
                )}
              </Heading>
            </Flex>
          </WouterLink>
        </Flex>
        <HStack align={"center"} spacing={2}>
          <Box>
            <Button
              colorScheme="whatsapp"
              cursor="pointer"
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
              cursor="pointer"
              my={5}
              variant={"ghost"}
              onClick={() => navigate("/")}
            >
              Home
            </Button>
            {!user ? (
              <>
                <Button
                  aria-label={"SignUp"}
                  as="a"
                  cursor="pointer"
                  my={5}
                  variant={"ghost"}
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
                <Button
                  aria-label={"SignIn"}
                  as={"a"}
                  bgColor={"green.400"}
                  color={"white"}
                  cursor="pointer"
                  my={5}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </>
            ) : (
              <Button
                aria-label={"SignIn"}
                as={"a"}
                bgColor={"green.400"}
                color={"white"}
                cursor="pointer"
                my={5}
                onClick={() => {
                  logout(), setDisplay("none");
                }}
              >
                Logout
              </Button>
            )}
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
        {/* === Sidebar === */}
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
          {!user ? (
            <>
              <Button
                aria-label={"SignUp"}
                as="a"
                fontSize={"2xl"}
                h={"100%"}
                py={10}
                variant={"ghost"}
                w={"100%"}
                onClick={() => {
                  navigate("/register"), setDisplay("none");
                }}
              >
                Register
              </Button>
              <Button
                aria-label={"SignIn"}
                as="a"
                fontSize={"2xl"}
                h={"100%"}
                py={10}
                variant={"ghost"}
                w={"100%"}
                onClick={() => {
                  navigate("/login"), setDisplay("none");
                }}
              >
                Login
              </Button>
            </>
          ) : (
            <Button
              aria-label={"SignIn"}
              as="a"
              fontSize={"2xl"}
              h={"100%"}
              py={10}
              variant={"ghost"}
              w={"100%"}
              onClick={() => {
                logout(), setDisplay("none"), navigate("/");
              }}
            >
              Logout
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NavBar;
