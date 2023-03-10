import { Box } from "@mui/material";
import Ad from "./Ad";
import UserMenuBar from "./UserMenuBar";
import PageMenuBar from "./PageMenuBar";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <Box
      sx={{
        p: 0,
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Ad />
      <UserMenuBar />
      <Box
        sx={{
          overflow: "hidden",
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <PageMenuBar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
