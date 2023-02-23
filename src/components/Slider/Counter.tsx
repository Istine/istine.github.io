import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import * as React from "react";
import { SLIDER_ASSETS } from "../../constants";

const CssBox = styled(Box)({
  "&": {
    width: "20px",
    height: "20px",
    border: "1px solid #00659D",
  },
});

const Counter: React.FC<{ count: number }> = ({ count }) => {
  const Boxes = SLIDER_ASSETS.map((asset: string, idx) => {
    return (
      <CssBox
        key={idx}
        sx={{
          backgroundColor: count === idx ? "#00659D" : "initial",
        }}
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
