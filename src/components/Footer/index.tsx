import { styled } from "@mui/material/styles";
import { Box, Link, Typography } from "@mui/material";
import * as React from "react";
import { FOOTER_LINKS } from "../../constants";

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
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
});

const ListContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "150px",
  width: "150px",
  "& ul": {
    listStyle: "none",
    padding: "0",
    fontFamil: "montserrat",
    fontSize: 10,
    "& li": {
      margin: ".3rem 0",
    },
  },
});

const RightsReserved = styled(Box)({
  width: "100%",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  "& span": { fontWeight: 600, fontSize: 10, fontFamily: "montserrat" },
});

function generateNodesByListType(item: any, idx: number, heading: string) {
  const isSecurePaymentText =
    String(item).toLowerCase() === "secure payments".toLowerCase();
  switch (typeof item) {
    case "string":
      return (
        <Link
          sx={{
            color: "black",
            fontWeight: isSecurePaymentText ? 700 : "normal",
            fontFamily: "montserrat",
            fontSize: isSecurePaymentText ? 12 : 10,
            ...(!isSecurePaymentText && { textTransform: "capitalize" }),
          }}
          key={idx}
          href="#"
        >
          <li>{item}</li>
        </Link>
      );
    case "object":
      if (Array.isArray(item)) {
        const isSocialIcons = item[0].split(".")[1] === "svg";
        const location = isSocialIcons ? `/assets/icons` : `/assets/logos`;
        const SubList = (
          <Box
            display="flex"
            alignItems="center"
            mb={isSocialIcons ? 2 : 0}
            mt={!isSocialIcons ? 2 : 0}
          >
            {item.map((node, idx) => (
              <img
                key={idx}
                className={isSocialIcons ? "socials" : "payment-partners"}
                src={location + "/" + node}
                alt={isSocialIcons ? "social icon" : "payment icon"}
                loading="lazy"
              />
            ))}
          </Box>
        );
        return SubList;
      } else if (Object.keys(item).includes("url")) {
        return (
          <img
            className="footer-logo"
            src={`/assets/logos/${item.url}`}
            alt="gallery bebe logo"
            loading="lazy"
          />
        );
      }
  }
}

const List: React.FC<{ list: { items: Array<any>; heading: string } }> = ({
  list,
}) => {
  const ListItems = list.items.map((item: any, idx) => {
    return generateNodesByListType(item, idx, list.heading);
  });
  return (
    <ListContainer>
      <Typography
        fontFamily="montserrat"
        fontWeight={700}
        fontSize={9}
        component="h4"
        textTransform="capitalize"
      >
        {list.heading}
      </Typography>
      <Box component="ul">{ListItems}</Box>
    </ListContainer>
  );
};

const Footer: React.FC<{}> = () => {
  const ListItems = FOOTER_LINKS.map((list, idx) => {
    return <List key={idx} list={list} />;
  });
  return (
    <>
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
        <CssSection mt={10} component="section">
          {ListItems}
        </CssSection>
      </CssFooter>
      <RightsReserved>
        <Box component="span">© 2023 gallery BEBE | All Rights Reserved</Box>
      </RightsReserved>
    </>
  );
};

export default React.memo(Footer);
