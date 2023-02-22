import { Box } from "@mui/material";
import * as React from "react";
import Layout from "../Layout/Index";
import Slider from "../Slider";
import Cards from "../Cards";

const LandingPage: React.FC<{}> = () => {
  return (
    <Layout>
      <Slider />
      <Cards />
    </Layout>
  );
};

export default LandingPage;
