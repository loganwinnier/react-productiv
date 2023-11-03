import { fireEvent, getByPlaceholderText, getSuggestedQuery, render } from "@testing-library/react";
import TodoApp from "./TodoApp";
import { TEST_TODOS } from "./_commonTest";
import Todo from "./Todo";

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

  it("all sections are rendered", function () {
    const result = render(<TodoApp initialTodos={TEST_TODOS} />);

    expect(result.queryByText("Top Todo")).toBeInTheDocument();
    expect(result.queryByText("Add Nü")).toBeInTheDocument();
    expect(result.container.querySelector(".EditableTodoList")).toBeInTheDocument();
  });

  it("top todo not rendered if no todos", function () {
    const result = render(<TodoApp initialTodos={[]} />);

    expect(result.queryByText("Top Todo")).not.toBeInTheDocument();
    expect(result.queryByText("You have no todos.")).toBeInTheDocument();
  });

  it("editing works", function () {

    const result = render(<TodoApp initialTodos={TEST_TODOS} />);

    //Open edit form for second todo with lower priority
    const editButton = result.queryAllByText('Edit')[1];
    fireEvent.click(editButton);

    //Replace title with new title
    const titleInput = result.getAllByPlaceholderText("Title")[0];
    fireEvent.change(titleInput, {
      target: { value: "edited-test" }
    });

    //submit edit form
    const submitButton = result.queryAllByText('Gø!')[0];
    fireEvent.click(submitButton);

    expect(result.queryByText("edited-test")).toBeInTheDocument();


    fireEvent.click(editButton);

    //Replace description with new description
    const descInput = result.getAllByPlaceholderText("Description")[0];
    fireEvent.change(descInput, {
      target: { value: "edited-test-description" }
    });

    fireEvent.click(submitButton);

    expect(result.queryByText("edited-test-description")).toBeInTheDocument();


    // fireEvent.click(editButton);

    // expect(result.queryAllByText("<small>3</small>").length).toEqual(1);

    // //Replace priority  with new priority
    // const priorityInput = result.getAllByLabelText("Priority:")[0];
    // fireEvent.change(priorityInput, {
    //   target: { value: "3" }
    // });
    // fireEvent.click(submitButton);

    // expect(result.queryAllByText("<small>3</small>").length).toEqual(2);

  });

  it("deletes when Del button pressed", function () {

    const { queryAllByText, queryByText } = render(
      <TodoApp
        initialTodos={TEST_TODOS} />
    );
    expect(queryByText("todo-2")).toBeInTheDocument();

    const deleteButton = queryAllByText('Del')[1];
    fireEvent.click(deleteButton);

    expect(queryByText("todo-2")).not.toBeInTheDocument();
  });


  it("matches snapshot", function () {
    const { container } = render(<TodoApp initialTodos={TEST_TODOS} />);
    expect(container).toMatchSnapshot();
  });
});