import React from "react";
import { render, screen } from "@testing-library/react";
import { Climbing } from "./Climbing";

describe(Climbing, () => {
  it("should render 'Hello, World!", () => {
    render(<Climbing />);
    const element = screen.getByText("Hello, World!");
    expect(element).toBeInTheDocument();
  });
});
