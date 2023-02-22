import { Box, Link } from "@mui/material";
import * as React from "react";
import { LINKS } from "../../constants";

const LowerPageMenu: React.FC<{}> = () => {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",

        "& ul": {
          display: "flex",
          listStyle: "none",
          fontFamily: "montserrat",
        },
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <nav>
        <ul>
          {LINKS.map((link: { name: string; link: string }, idx: number) => (
            <Link
              sx={{
                textDecoration: "none",
                mx: 1,
                color: "black",
                fontSize: "10px",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
              key={idx}
              href={link.link}
            >
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </Box>
  );
};

export default React.memo(LowerPageMenu);
