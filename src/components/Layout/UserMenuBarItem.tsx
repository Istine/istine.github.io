import * as React from "react";
import { Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function adaptWidth(name: string) {
  const wordLength = name.length;
  return wordLength < 5 ? { width: "50px" } : { minWidth: "70px" };
}

const ICON_STYLE = { color: "white" };

const UserMenuBarItem: React.FC<{ name: string; withChevron: boolean }> = ({
  name,
  withChevron,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    setOpen((prevState: boolean) => !prevState);
  };

  const clickOptions = {
    ...(withChevron && { onClick: toggleMenu }),
  };

  return (
    <Box
      {...clickOptions}
      sx={{
        display: "flex",
        ...adaptWidth(name),
        justifyContent: "space-around",
        alignItems: "center",
        margin: "0 .5rem",
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <Box
        component="span"
        sx={{ fontFamily: "montserrat", fontSize: "13px", color: "white" }}
      >
        {name}
      </Box>
      {withChevron ? (
        open ? (
          <ExpandLessIcon data-testid="open" sx={ICON_STYLE} />
        ) : (
          <ExpandMoreIcon data-testid="closed" sx={ICON_STYLE} />
        )
      ) : null}
    </Box>
  );
};

export default React.memo(UserMenuBarItem);
