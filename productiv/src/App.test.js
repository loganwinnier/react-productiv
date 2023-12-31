import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { TEST_TODOS } from "./_commonTest";

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<App />);
  });

  it("contains expected title", function () {
    const result = render(<App />);
    expect(result.queryByText("Prødüctîv")).toBeInTheDocument();
  });

  it("rendered quotes app", function () {
    const result = render(<App />);
    expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
  });

  it("matches snapshot", function () {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});

