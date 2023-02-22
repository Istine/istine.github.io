import { Box } from "@mui/material";
import * as React from "react";
import Layout from "../Layout/Index";
import Slider from "../Slider";
import Cards from "../Cards";
import Tabs from "../Tabs";
import ProductCards from "../Cards/ProductCard";
import Categories from "../Categories";

const LandingPage: React.FC<{}> = () => {
  return (
    <Layout>
      <Slider />
      <Cards />
      <Tabs>
        <ProductCards />
      </Tabs>
      <Categories />
    </Layout>
  );
};

export default LandingPage;
