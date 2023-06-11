import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe(App, () => {
  it("should render 'Hello, World!", () => {
    render(<App />);
    const element = screen.getByText("Hello, World!");
    expect(element).toBeInTheDocument();
  });
});
