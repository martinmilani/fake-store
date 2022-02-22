import {useState} from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {useLocation} from "wouter";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {loginSchema} from "../../../validations/LoginValidation";
import ErrorBanner from "../../../components/ErrorBanner";
import {login} from "../../../services/authService";

export default function LoginForm() {
  const [, setLocation] = useLocation();
  const [fireStatus, setFireState] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = (route) => {
    setLocation(route);
  };

  const submitForm = async () => {
    setIsSubmitting(true);

    try {
      await login(input.email, input.password);
      setIsSubmitting(false);
      navigate("/");
    } catch (error) {
      setFireState("failed");
      setIsSubmitting(false);
    }
  };

  return (
    <Flex
      align={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      justify={"center"}
      minH={"100vh"}
    >
      <Stack maxW={"lg"} mx={"auto"} px={6} py={12} spacing={8} w={"100%"}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>
            <Text align="center">Login to your account</Text>{" "}
          </Heading>
        </Stack>
        {fireStatus === "failed" && <ErrorBanner message="Wrong email or password" />}
        <Box bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8} rounded={"lg"}>
          <form onSubmit={handleSubmit(submitForm)}>
            <Stack spacing={4}>
              <FormControl isRequired id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  {...register("email")}
                  name="email"
                  type="email"
                  onChange={handleInputChange}
                />
                <Text color={"red"} py={2}>
                  {errors.email?.message}
                </Text>
              </FormControl>
              <FormControl isRequired id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  {...register("password")}
                  name="password"
                  type="password"
                  onChange={handleInputChange}
                />
                <Text color={"red"} py={2}>
                  {errors.password?.message}
                </Text>
              </FormControl>
              <Stack spacing={10}>
                <Stack align={"center"} direction={{base: "column", sm: "row"}} justify={"center"}>
                  <Link color={"green.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  _hover={{
                    bg: "green.500",
                  }}
                  bg={"green.400"}
                  color={"white"}
                  isLoading={isSubmitting}
                  loadingText="Submitting"
                  type="submit"
                >
                  Login
                </Button>
                <Text align={"center"}>
                  Not a user?{" "}
                  <Link color={"green.400"} href="/register">
                    Register
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
