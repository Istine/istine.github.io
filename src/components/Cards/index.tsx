import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import * as React from "react";

const Grid = styled(Box)(() => ({
  "&": {
    width: "auto",
    height: "400px",
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(4, 200px)",
    gridTemplateRows: "50px",
    justifyItems: "center",
    alignItems: "center",
  },
  "& .item1": {
    width: "100%",
    height: "100%",
    position: "relative",
    gridColumnStart: 1,
    gridColumnEnd: 2,
    gridRowStart: 1,
    gridRowEnd: 4,
    background: "url(/public/assets/pictures/soothers.png)",
    backrgoundSize: "contain",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    padding: "1rem",
  },
  "& .item2": {
    width: "100%",
    height: "100%",
    position: "relative",
    gridColumnStart: 1,
    gridColumnEnd: 2,
    gridRowStart: 4,
    gridRowEnd: 7,
    background: "url(/public/assets/pictures/baby-care.png)",
    backrgoundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    padding: "1rem",
  },
  "& .item3": {
    width: "100%",
    height: "100%",
    position: "relative",
    gridColumnStart: 2,
    gridColumnEnd: 4,
    gridRowStart: 1,
    gridRowEnd: 7,
    background: "url(/public/assets/pictures/child-holding-camera.png)",
    backrgoundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    padding: "1rem",
  },
  "& .item4": {
    width: "100%",
    height: "100%",
    position: "relative",
    gridColumnStart: 4,
    gridColumnEnd: 5,
    gridRowStart: 1,
    gridRowEnd: 4,
    background: "url(/public/assets/pictures/baby-care.png)",
    backrgoundSize: "contain",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    padding: "1rem",
  },
  "& .item5": {
    width: "100%",
    height: "100%",
    position: "relative",
    gridColumnStart: 4,
    gridColumnEnd: 5,
    gridRowStart: 4,
    gridRowEnd: 7,
    background: "url(/public/assets/pictures/baby-care.png)",
    backrgoundSize: "contain",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    padding: "1rem",
  },
}));

const cardDetails = [
  { className: "item1", title: "Soothers", desc: "" },
  { className: "item2", title: "Baby care", desc: "" },
  {
    className: "item3",
    title: "featured",
    desc: "top ten products of the week",
  },
  { className: "item4", title: "accessories", desc: "" },
  { className: "item5", title: "special design series", desc: "" },
];

const Cards: React.FC<{}> = () => {
  const cards = cardDetails.map((item, idx) => {
    return (
      <div key={idx} className={item.className}>
        <Box
          component="span"
          sx={{
            color: item.title === "featured" ? "black" : "white",
            fontSize: item.title === "featured" ? "23px" : "10px",
            fontFamily: "montserrat",
            ...{ fontWeight: 600 },
            textTransform:
              item.title === "featured" ? "capitalize" : "uppercase",
          }}
        >
          {item.title}
        </Box>
        <Box
          component="h3"
          sx={{
            color: item.title === "featured" ? "black" : "white",
            fontSize: item.title === "featured" ? "10px" : "15px",
            fontFamily: "montserrat",
            textTransform: "capitalize",
          }}
        >
          {item.title === "featured" ? item.desc : "Lifestyle"}
        </Box>
        <Box
          component="span"
          sx={{
            color: "white",
            fontSize: "10px",
            fontFamily: "montserrat",
            textTransform: "capitalize",
          }}
        >
          Explore Items
        </Box>
      </div>
    );
  });
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="500px"
    >
      <Grid>{cards}</Grid>
    </Box>
  );
};

export default Cards;
