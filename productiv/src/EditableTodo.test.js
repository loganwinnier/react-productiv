import React from "react";
import { fireEvent, render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";
import { TEST_TODO } from "./_commonTest";

describe("EditableTodo component", function () {
    it("renders without crashing", function () {
        render(<EditableTodo todo={TEST_TODO} />);
    });

    it("contains title, description, priority if not editing", function () {
        const result = render(<EditableTodo todo={TEST_TODO} />);
        expect(result.queryByText(TEST_TODO.title)).toBeInTheDocument();
        expect(result.queryByText(TEST_TODO.description)).toBeInTheDocument();
        expect(result.queryByText(TEST_TODO.priority)).toBeInTheDocument();
    });

    it("contains editing form if editing", function () {
        const { queryByText, container } = render(<EditableTodo todo={TEST_TODO} />);
        expect(container.getElementsByClassName('NewTodoForm').length).toEqual(0);
        const button = queryByText('Edit');
        fireEvent.click(button);

        expect(container.getElementsByClassName('NewTodoForm').length).toEqual(1);
    });

    it("matches snapshot", function () {
        const { container } = render(<EditableTodo todo={TEST_TODO} />);
        expect(container).toMatchSnapshot();
    });
});