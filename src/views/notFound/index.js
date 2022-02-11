import {Center, Heading, Text, Button} from "@chakra-ui/react";
import {Link as WouterLink} from "wouter";

export default function NotFound() {
  return (
    <Center flexDirection="column" h="100vh" px={6} py={10} textAlign="center">
      <Heading as="h2" backgroundClip="text" bgColor="green.400" display="inline-block" size="2xl">
        404
      </Heading>
      <Text fontSize="18px" mb={2} mt={3}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you are looking for does not seem to exist
      </Text>

      <WouterLink href="/">
        <Button bgColor="green.400" color="white" colorScheme="teal" variant="solid">
          Go to Home
        </Button>
      </WouterLink>
    </Center>
  );
}
