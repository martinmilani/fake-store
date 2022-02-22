import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack,
  Button,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useLocation} from "wouter";

import {registerNewUser} from "../../../services/authService";
import ErrorBanner from "../../../components/ErrorBanner";
import {registerSchema} from "../../../validations/RegisterValidation";

export default function RegisterForm() {
  const [, setLocation] = useLocation();
  const [fireStatus, setFireState] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = (route) => {
    setLocation(route);
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    try {
      await registerNewUser(user.email, user.password);
      setIsSubmitting(false);
      navigate("/");
    } catch (error) {
      setFireState("failed");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Flex
        align={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
        justify={"center"}
        minH={"100vh"}
      >
        <Stack maxW={"lg"} mx={"auto"} px={6} py={12} spacing={8} w={"100%"}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Register
            </Heading>
            {fireStatus === "failed" && <ErrorBanner message="Email already in use" />}
          </Stack>
          <Box bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8} rounded={"lg"}>
            <form onSubmit={handleSubmit(submitForm)}>
              <Stack spacing={4}>
                <FormControl isRequired id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input {...register("email")} name="email" onChange={handleInputChange} />
                  <Text color={"red"} py={2}>
                    {errors.email?.message}
                  </Text>
                </FormControl>
                <FormControl isRequired id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    {...register("password")}
                    name="password"
                    type={"password"}
                    onChange={handleInputChange}
                  />
                  <Text color={"red"} py={2}>
                    {errors.password?.message}
                  </Text>
                  <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    {...register("passwordConfirmation")}
                    name="passwordConfirmation"
                    type="password"
                    onChange={handleInputChange}
                  />
                  <Text color={"red"} py={2}>
                    {errors.passwordConfirmation?.message}
                  </Text>
                  <FormErrorMessage>{errors.passwordConfirmation?.message}</FormErrorMessage>
                </FormControl>

                <Stack pt={2} spacing={10}>
                  <Button
                    _hover={{
                      bg: "green.500",
                    }}
                    bg={"green.400"}
                    color={"white"}
                    isLoading={isSubmitting}
                    loadingText="Submitting"
                    size="lg"
                    type="submit"
                  >
                    Register
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <Link color={"green.400"} href="/login">
                      Login
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
