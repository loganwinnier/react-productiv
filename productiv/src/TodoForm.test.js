import { render } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("TodoForm Tests", function () {
    it("renders without crashing", function () {
        render(<TodoForm />);
    });

    it("matches snapshot", function () {
        const { container } = render(<TodoForm />);
        expect(container).toMatchSnapshot();
    });

    it("Form appears in document", function () {
        const result = render(<TodoForm />);
        expect(result.getByPlaceholderText("Title")).toBeInTheDocument();
        expect(result.getByPlaceholderText("Description")).toBeInTheDocument();
        expect(result.getByLabelText("Priority:")).toBeInTheDocument();
    });
});