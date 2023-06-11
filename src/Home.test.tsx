import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe(Home, () => {
  it("should render 'Hello, World!", () => {
    render(<Home />);
    const element = screen.getByText("Hello, World!");
    expect(element).toBeInTheDocument();
  });
});
