import { Box } from "@mui/material";
import Search from "./Search";
import PageMenuIconWrapper from "./PageMenuIconWrapper";
import LowerPageMenu from "./LowerPageMenu";

const PageMenuBar: React.FC<{}> = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "primary.main",
        minHeight: "100px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <img
          src="/assets/logos/gallery-bebe-logo.png"
          alt="gallery bebe logo"
          loading="lazy"
          className="md-logo"
        />
        <Search />
        <PageMenuIconWrapper />
      </Box>
      <LowerPageMenu />
    </Box>
  );
};

export default PageMenuBar;
