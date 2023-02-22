import { Box } from "@mui/material";
import Search from "./Search";

const PageMenuBar: React.FC<{}> = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "primary.main",
        minHeight: "100px",
        display: "flex",
        flexDirection: "column",
        py: 1,
      }}
    >
      <Box display="flex" justifyContent="space-around">
        <img
          src="/assets/logos/gallery-bebe-logo.png"
          alt="gallery bebe logo"
          loading="lazy"
          className="md-logo"
        />
        <Search />
        <>Hello</>
      </Box>
    </Box>
  );
};

export default PageMenuBar;
