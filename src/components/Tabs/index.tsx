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

const TabWithBadge = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  "& .badge": {
    position: "absolute",
    textTransform: "capitalize",
    fontFamily: "montserrat",
    fontSize: "8px",
    fontWeight: 600,
    backgroundColor: "red",
    color: "white",
    padding: "0.2rem 0.5rem",
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
        <>
          <TabWithBadge>
            <div className="badge">new</div>
            <Tab label="new arrival" />
          </TabWithBadge>
        </>
      </CssTabs>
      {children}
    </Box>
  );
};

export default Tabs;
