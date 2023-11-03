import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Todo from "./Todo";
import { TEST_TODO } from "./_commonTest";

describe("Todo component", function () {
  it("renders without crashing", function () {
    render(<Todo todo={TEST_TODO}/>);
  });

  it("contains title, description, priority", function () {
    const result = render(<Todo todo={TEST_TODO}/>);
    expect(result.queryByText(TEST_TODO.title)).toBeInTheDocument();
    expect(result.queryByText(TEST_TODO.description)).toBeInTheDocument();
    expect(result.queryByText(TEST_TODO.priority)).toBeInTheDocument();
  });

  it ("matches snapshot", function () {
    const { container } = render(<Todo todo={TEST_TODO}/>);
    expect(container).toMatchSnapshot();
  })
});