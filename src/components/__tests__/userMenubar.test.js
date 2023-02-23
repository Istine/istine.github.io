import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import UserMenuBarItem from "../Layout/UserMenuBarItem";

describe("UserMenuBarItem component test", () => {
  it("it should render the UserMenuBarItem component ", () => {
    render(<UserMenuBarItem withChevron={true} name="NGN" />);
    expect(screen.getByTestId("closed")).toBeInTheDocument();
  });

  it("should change the chevron icon from closed to open", async () => {
    render(<UserMenuBarItem withChevron={true} name="NGN" />);
    await userEvent.click(screen.getByTestId("closed"));
    const compOpen = screen.getByTestId("open");
    const compClosed = screen.queryByTestId("closed");
    expect(compOpen).toBeInTheDocument();
    expect(compClosed).not.toBeInTheDocument();
  });
});
