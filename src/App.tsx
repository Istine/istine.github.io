import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import LandingPage from "./components/pages/LandingPage";

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
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
