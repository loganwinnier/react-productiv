import React from "react";
import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";
import { TEST_TODOS } from "./_commonTest";

describe("EditableTodo component", function () {
    it("renders without crashing", function () {
        render(<EditableTodoList todos={TEST_TODOS} />);
    });

    it("contains todo, edit button, delete button if not editing", function () {
        const result = render(<EditableTodoList todos={TEST_TODOS} />);

        for (const todo of TEST_TODOS) {
            expect(result.queryByText(todo.title)).toBeInTheDocument();
            expect(result.queryByText(todo.description)).toBeInTheDocument();
        }
    });
});