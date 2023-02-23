import { styled } from "@mui/material/styles";
import { Box, Link, Typography } from "@mui/material";
import * as React from "react";

const CssFooter = styled(Box)({
  width: "100%",
  height: "400px",
  backgroundColor: "#EBF5FA",
  padding: "2rem ",
  display: "flex",
  flexDirection: "column",
});

const CssSection = styled(Box)({
  width: "80%",
  alignSelf: "center",
  height: "calc(100%  - 150px)",
  border: "none",
  borderTop: "1px solid #bbb",
  borderBottom: "1px solid #bbb",
});

const ListContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100px",
});

const List: React.FC<{ list: { items: Array<any>; heading: string } }> = ({
  list,
}) => {
  const ListItems = list.items.map((item: any, idx) => {
    return (
      <Link href="#">
        <li>{item}</li>
      </Link>
    );
  });
  return (
    <ListContainer>
      <Typography
        fontFamily="montserrat"
        fontWeight={700}
        fontSize={9}
        component="h4"
      >
        {list.heading}
      </Typography>
      <Box component="ul">{ListItems}</Box>
    </ListContainer>
  );
};

const Footer: React.FC<{}> = () => {
  return (
    <CssFooter component="footer">
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
      </Box>
      <CssSection mt={10} component="section"></CssSection>
    </CssFooter>
  );
};

export default Footer;
