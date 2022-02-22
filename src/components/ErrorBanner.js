import React from "react";
import {Alert, AlertIcon, AlertTitle, Box} from "@chakra-ui/react";

function ErrorBanner({message}) {
  return (
    <Box pt={12} w="100%">
      <Alert justifyContent={"center"} rounded={"md"} status="error">
        <AlertIcon />
        <AlertTitle mr={2}>
          {message || "Content you requested cannot be displayed right now"}
        </AlertTitle>
      </Alert>
    </Box>
  );
}

export default ErrorBanner;
