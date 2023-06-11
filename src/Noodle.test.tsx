import React from "react";
import { render, screen } from "@testing-library/react";
import { Noodle } from "./Noodle";

describe(Noodle, () => {
  it("should render 'Hello, World!", () => {
    render(<Noodle />);
    const element = screen.getByText("Hello, World!");
    expect(element).toBeInTheDocument();
  });
});
