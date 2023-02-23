import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import * as React from "react";

const CssFooter = styled(Box)({
  width: "100%",
  height: "400px",
  backgroundColor: "#EBF5FA",
  padding: "2rem ",
});

const Footer: React.FC<{}> = () => {
  return (
    <CssFooter>
      <Box display="flex" justifyContent="space-evenly">
        <Box display="flex" fontFamily="montserrat" flexDirection="column">
          <Box component="h3" fontSize={10}>
            SIGN UP FOR NEWSLETTER & GET ALL UPDATES
          </Box>
          <Box component="p" fontSize={10}>
            Lorem ipsum dolor sit amet, sed do eiusmod tempor incdidunt ut
            labore et.
          </Box>
        </Box>
        <div className="footer-input">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
        <Box></Box>
      </Box>
    </CssFooter>
  );
};

export default Footer;
