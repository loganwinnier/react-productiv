import React from "react";
import { fireEvent, render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";
import { TEST_TODO } from "./_commonTest";

describe("EditableTodo component", function () {
    it("renders without crashing", function () {
        render(<EditableTodo todo={TEST_TODO} />);
    });

    it("contains todo, edit button, delete button if not editing", function () {
        const result = render(<EditableTodo todo={TEST_TODO} />);
        expect(result.queryByText(TEST_TODO.title)).toBeInTheDocument();
        expect(result.queryByText(TEST_TODO.description)).toBeInTheDocument();
        expect(result.queryByText(TEST_TODO.priority)).toBeInTheDocument();
        expect(result.queryByText("Edit")).toBeInTheDocument();
        expect(result.queryByText("Del")).toBeInTheDocument();
    });

    it("contains editing form if editing", function () {
        const { queryByText, container } = render(<EditableTodo todo={TEST_TODO} />);
        expect(container.getElementsByClassName('NewTodoForm').length).toEqual(0);
        const button = queryByText('Edit');
        fireEvent.click(button);

        expect(container.getElementsByClassName('NewTodoForm').length).toEqual(1);
    });

    it("calls submit function when submitting after editing", function () {
        const update = jest.fn();
        // update.mockReturnValue()

        const { queryByText, container } = render(
            <EditableTodo
                todo={TEST_TODO}
                update={update} />
        );

        const editButton = queryByText('Edit');
        fireEvent.click(editButton);

        const submitButton = queryByText('Gø!');
        fireEvent.click(submitButton);

        expect(update).toHaveBeenCalledTimes(1);
    });

    it("calls remove function when delete button pressed", function () {
        const remove = jest.fn();
        // update.mockReturnValue()

        const { queryByText, container } = render(
            <EditableTodo
                todo={TEST_TODO}
                remove={remove} />
        )

        const deleteButton = queryByText('Del');
        fireEvent.click(deleteButton);

        expect(remove).toHaveBeenCalledTimes(1);
    });

    it("matches snapshot", function () {
        const { container } = render(<EditableTodo todo={TEST_TODO} />);
        expect(container).toMatchSnapshot();
    });
});