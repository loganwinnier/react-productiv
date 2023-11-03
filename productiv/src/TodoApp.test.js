import { fireEvent, render } from "@testing-library/react";
import TodoApp from "./TodoApp";
import { TEST_TODOS } from "./_commonTest";

describe("TodoApp Tests", function () {
    it("renders without crashing", function () {
        render(<TodoApp initialTodos={TEST_TODOS} />);
      });

    it("can add new todo", function () {
        const result = render(<TodoApp initialTodos={TEST_TODOS} />);

        //no items
        expect(result.queryByText("Test-1")).not.toBeInTheDocument();

        const title = result.getByPlaceholderText("Title");
        const description = result.getByPlaceholderText("Description");
        const priority = result.getByLabelText("Priority:");
        const button = result.queryByText('Gø!');

        fireEvent.change(title, { target: { value: "test-todo" } });
        fireEvent.change(description, { target: { value: "test-todo-description" } });
        fireEvent.change(priority, { target: { value: 1 } });
        fireEvent.click(button);

        expect(result.queryByText("test-todo")).toBeInTheDocument();
        expect(result.queryByText("test-todo-description")).toBeInTheDocument();
    });

    it("matches snapshot", function () {
        const { container } = render(<TodoApp initialTodos={TEST_TODOS} />);
        expect(container).toMatchSnapshot();
      });
});