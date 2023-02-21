import { Box } from "@mui/material";
import Ad from "../Ad";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <Box sx={{ p: 0, overflow: "hidden", width: "100%" }}>
      <Ad />
      {children}
    </Box>
  );
};

export default Layout;
