import * as React from "react";
import { Box } from "@mui/material";

const Ad: React.FC<{}> = (): JSX.Element => {
  const [isAdOpen, setAdOpenState] = React.useState<boolean>(true);

  const closeAd = (e: React.MouseEvent<HTMLImageElement>) => {
    setAdOpenState(false);
  };

  return isAdOpen ? (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        width: "100%",
        py: 1,
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        px: 2,
      }}
    >
      <Box
        component="span"
        sx={{
          textAlign: "center",
          color: "white",
          justifySelf: "center",
          marginRight: "38%",
          fontFamily: "Montserrat",
          fontWeight: "normal",
        }}
      >
        Get UP TO 40% OFF on your 1st order More details
      </Box>
      <img
        onClick={closeAd}
        className="xs-icon"
        data-testid="close-icon"
        src="/assets/icons/cancel.png"
        alt="close icon"
        loading="lazy"
      />
    </Box>
  ) : (
    <></>
  );
};

export default Ad;
