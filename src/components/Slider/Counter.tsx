import { styled } from "@mui/system";
import { Box } from "@mui/material";
import * as React from "react";
import { SLIDER_ASSETS } from "../../constants";

const CssBox = styled(Box)(({ isItem }) => ({
  "&": {
    width: "20px",
    height: "20px",
    border: "1px solid #00659D",
    backgroundColor: isItem ? "#00659D" : "initial",
  },
}));

const Counter: React.FC<{ count: number }> = ({ count }) => {
  const Boxes = SLIDER_ASSETS.map((asset: string, idx) => {
    return (
      <CssBox
        key={idx}
        isItem={count === idx}
        mx={0.5}
        component="div"
      ></CssBox>
    );
  });

  return (
    <Box
      display="flex"
      alignItems="center"
      position="absolute"
      top="80%"
      left="10%"
    >
      {Boxes}
    </Box>
  );
};

export default Counter;
