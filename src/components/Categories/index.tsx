import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { CATEGORIES } from "../../constants";

const CssFlexBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem 0",
});

const CssCategory = styled(Box)({
  width: "150px",
  height: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 .5rem",
});

const Categories: React.FC<{}> = () => {
  return (
    <CssFlexBox>
      <Box
        component="h3"
        fontFamily="montserrat"
        fontSize="26px"
        color="black"
        fontWeight={700}
      >
        Categories
      </Box>
      <Box display="flex">
        {CATEGORIES.map((item, idx) => (
          <CssCategory key={idx} bgcolor={item.color}>
            <img
              src={`/assets/icons/${item.url}`}
              alt={item.url.split(".")[0]}
              loading="lazy"
              style={{ width: "50px", height: "50px" }}
            />
          </CssCategory>
        ))}
      </Box>
    </CssFlexBox>
  );
};

export default Categories;
