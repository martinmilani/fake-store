import React from "react";
import {Skeleton, Stack, Box, SkeletonText, Center} from "@chakra-ui/react";

function ProductSkeleton() {
  return (
    <Center py={12}>
      <Box
        boxShadow={"xl"}
        h={"450px"}
        p={6}
        pos={"relative"}
        role={"group"}
        rounded={"lg"}
        w={220}
        zIndex={1}
      >
        <Stack spacing="24px">
          <Skeleton mt height={230} rounded={"lg"} />
          <Center>
            <Skeleton height={18} width={50} />
          </Center>
          <SkeletonText noOfLines={4} spacing="3" />
          <Center>
            <Skeleton height={18} width={50} />
          </Center>
        </Stack>
      </Box>
    </Center>
  );
}

export default ProductSkeleton;
