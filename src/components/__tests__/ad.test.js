import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Ad from "../Layout/Ad";

describe("Ad component test", () => {
  it("it should render the Ad component ", () => {
    render(<Ad />);
    expect(
      screen.getByText("Get UP TO 40% OFF on your 1st order More details")
    ).toBeInTheDocument();
  });

  it("should not be in the document after click", async () => {
    render(<Ad />);
    await userEvent.click(screen.getByTestId("close-icon"));
    const comp = screen.queryByText(
      "Get UP TO 40% OFF on your 1st order More details"
    );
    expect(comp).not.toBeInTheDocument();
  });

  it("should break", () => {
    expect(true).toBe(false);
  });
});
