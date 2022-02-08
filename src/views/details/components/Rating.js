import React from "react";
import {Box} from "@chakra-ui/react";
import {BsStar, BsStarFill, BsStarHalf} from "react-icons/bs";

function Rating({rating, numReviews}) {
  return (
    <Box alignItems="center" d="flex" mt={2}>
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;

          if (roundedRating - i >= 1) {
            return <BsStarFill key={i} color={"#5abc79"} style={{marginLeft: "1"}} />;
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} color={"#5abc79"} style={{marginLeft: "1"}} />;
          }

          return <BsStar key={i} color={"#5abc79"} style={{marginLeft: "1"}} />;
        })}
      <Box as="span" color="gray.600" fontSize="sm" ml="2">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

export default Rating;
