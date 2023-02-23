import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Slider from "../Slider";
import { act } from "react-dom/test-utils";

const delay = (sec) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, sec * 1000);
  });

describe("Slider component test", () => {
  it("it should render the Slider component ", () => {
    render(<Slider />);
    expect(screen.getByTestId("slider-test")).toBeInTheDocument();
  });

  it("should contain a different image after 4s ", async () => {
    act(() => render(<Slider />));
    const compOne = screen.getByAltText("child holding camera");
    expect(compOne).toBeInTheDocument();
    setTimeout(() => {
      const comp = screen.getByAltText("woman and child");
      expect(comp).toBeInTheDocument();
    }, 4000);
  });
});
