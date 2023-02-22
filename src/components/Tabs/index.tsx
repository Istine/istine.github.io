import * as React from "react";
import { Box, Tabs as MuiTabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

const CssTabs = styled(MuiTabs)({
  "& .MuiTabs-centered .MuiTab-root": {
    color: "black",
    fontFamily: "montserrat",
    fontSize: "10px",
    fontWeight: "700",
  },
  "& .MuiTabs-centered  .Mui-selected": {
    color: "#00659D",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
});

const Tabs: React.FC<{ children: any }> = ({ children }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <CssTabs value={value} onChange={handleChange} centered>
        <Tab label="top sales" />
        <Tab label="trending" />
        <Tab label="winter sales" />
      </CssTabs>
      {children}
    </Box>
  );
};

export default Tabs;
