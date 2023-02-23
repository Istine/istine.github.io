import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as React from "react";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Grid = styled(Box)({
  display: "grid",
  height: "400px",
  gridTemplateColumns: "repeat(3, 250px)",
  gridTemplateRows: "140px 140px",
  gap: ".7rem",
  "& .post1": {
    width: "100%",
    height: "100%",
    backgroundColor: "#00659D",
    gridColumnStart: 1,
    gridColumnEnd: 2,
    gridRowStart: 1,
    gridRowEnd: 3,
    padding: "1rem",
    "& img": {
      width: "100%",
      height: "50%",
    },
  },
  "& .post2": {
    width: "100%",
    height: "100%",
    backgroundColor: "#00659D",
    gridColumnStart: 2,
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 2,
    display: "flex",
    justifyContent: "space-between",
    padding: ".5rem",
    "& img": {
      width: "55%",
      height: "100%",
    },
  },
  "& .post3": {
    width: "100%",
    height: "100%",
    backgroundColor: "#00659D",
    gridColumnStart: 3,
    gridColumnEnd: 4,
    gridRowStart: 1,
    gridRowEnd: 2,
    display: "flex",
    alignItems: "center",
    padding: ".5rem",
    "& img": {
      width: "55%",
      height: "100%",
    },
  },
  "& .post4": {
    width: "100%",
    height: "100%",
    backgroundColor: "#00659D",
    gridColumnStart: 2,
    gridColumnEnd: 4,
    gridRowStart: 2,
    gridRowEnd: 3,
    display: "flex",
    padding: ".5rem",
    "& img": {
      width: "30%",
      height: "100%",
    },
  },
});

const Blog: React.FC<{}> = () => {
  return (
    <StyledBox>
      <Box component="h3" fontFamily="montserrat" fontSize={26}>
        Latest Blog
      </Box>
      <Box component="p" fontFamily="montserrat" fontSize={17} my={1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Box>
      <Grid>
        <div className="post1">
          <img src="/assets/pictures/baby.png" alt="baby" loading="lazy" />
          <Box
            component="h3"
            sx={{
              fontFamily: "montserrat",
              fontSize: "12px",
              color: "white",
              textTransform: "capitalize",
            }}
          >
            work at the speed
          </Box>
          <Box
            component="p"
            fontSize={12}
            fontFamily="montserrat"
            color="white"
          >
            The gradual accumulation of information about atomic and small-scale
            behaviour small-scale be
          </Box>
        </div>
        <div className="post2">
          <img src="/assets/pictures/baby.png" alt="baby" loading="lazy" />
          <Box
            component="h3"
            sx={{
              fontFamily: "montserrat",
              fontSize: "9px",
              color: "white",
              textTransform: "capitalize",
            }}
          >
            work at the speed
          </Box>
        </div>
        <div className="post3">
          <img src="/assets/pictures/baby.png" alt="baby" loading="lazy" />
        </div>
        <div className="post4">
          <img src="/assets/pictures/baby.png" alt="baby" loading="lazy" />
          <Box display="flex" flexDirection="column" mx={2}>
            <Box
              component="h3"
              sx={{
                fontFamily: "montserrat",
                fontSize: "12px",
                color: "white",
                textTransform: "capitalize",
                margin: 0,
              }}
            >
              work at the speed
            </Box>
            <Box
              component="p"
              fontFamily="montserrat"
              fontSize={10}
              color="white"
            >
              The gradual accumulation of information about atomic and
              small-scale behaviour...The gradual accumulation of information
              about atomic and small-scale behaviour...The gradual accumulation
              of information about atomic and small-scale behaviour...The
              gradual accumulation of
            </Box>
          </Box>
        </div>
      </Grid>
    </StyledBox>
  );
};

export default Blog;
