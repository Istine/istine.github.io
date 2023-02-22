import * as React from "react";
import Layout from "./components/Layout/Index";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import "@fontsource/montserrat/700.css";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FEFEFE",
      },
      secondary: {
        main: "#00659D",
        dark: "#333333",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout>Hello World</Layout>
    </ThemeProvider>
  );
}

export default App;
