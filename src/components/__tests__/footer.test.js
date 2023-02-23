import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Footer from "../Footer";

describe("Ad component test", () => {
  it("it should render the Footer component ", () => {
    render(<Footer />);
    expect(
      screen.getByText("SIGN UP FOR NEWSLETTER & GET ALL UPDATES")
    ).toBeInTheDocument();
  });

  it("should match the content after typing to what is in the textbox", async () => {
    render(<Footer />);
    await userEvent.type(screen.getByTestId("input-test"), "hello world");
    const comp = screen.getByTestId("input-test");
    expect(comp.getAttribute("value")).toEqual("hello world");
  });
});
