import { Box } from "@mui/material";
import Ad from "./Ad";
import UserMenuBar from "./UserMenuBar";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <Box sx={{ p: 0, overflow: "hidden", width: "100%" }}>
      <Ad />
      <UserMenuBar />
      {children}
    </Box>
  );
};

export default Layout;
