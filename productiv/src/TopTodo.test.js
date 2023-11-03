import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TopTodo from "./TopTodo";
import { TEST_TODOS } from "./_commonTest";

describe("TopTodo component", function () {
  it("renders without crashing", function () {
    render(<TopTodo todos={TEST_TODOS} />);
  });

  it("contains title, description, priority", function () {
    const result = render(<TopTodo todos={TEST_TODOS} />);
  });

  it("returns null on empty input", function () {
    expect(TopTodo({ todos: [] })).toEqual(null);
  });

  it("renders correct top todo", function () {
    const result = render(<TopTodo todos={TEST_TODOS} />);
    expect(result.queryByText(TEST_TODOS[0].title)).toBeInTheDocument();
    expect(result.queryByText(TEST_TODOS[0].description)).toBeInTheDocument();
    expect(result.queryByText(TEST_TODOS[0].priority)).toBeInTheDocument();

  });

  it("matches snapshot", function () {
    const { container } = render(<TopTodo todos={TEST_TODOS} />);
    expect(container).toMatchSnapshot();
  });
});