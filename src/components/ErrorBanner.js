import React from "react";
import {Alert, AlertIcon, AlertTitle, Box} from "@chakra-ui/react";

function ShowError({status}) {
  if (status !== "failed") {
    return null;
  }

  return (
    <Box pt={12}>
      <Alert justifyContent={"center"} status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Content you requested cannot be displayed right now</AlertTitle>
      </Alert>
    </Box>
  );
}

export default ShowError;
