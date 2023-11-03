import React from "react";
import { fireEvent, render } from "@testing-library/react";
import RandomInspoQuote from "./RandomInspoQuote";
// import { getInspoQuote } from "./inspoQuoteApi";


describe("RandomInspoQuote", function () {
    it("renders without crashing", function () {
        render(<RandomInspoQuote />);
    });

    it("contains Click here for an inspirational quøte button", function () {
        const result = render(<RandomInspoQuote />);
        expect(result.container.querySelector(".Quote")).toBeFalsy();
        expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
    });

    it("Generates quote on inspirational quøte! button click", function () {
        // let getInspoQuote = jest.fn();
        // getInspoQuote.mockReturnValueOnce({ quote: { text: "I am a quote", author: "test" } });
        const result = render(<RandomInspoQuote />);
        expect(result.container.querySelector(".Quote")).toBeFalsy();

        const quoteButton = result.queryByText('Click here for an inspirational quøte!');
        fireEvent.click(quoteButton);
        expect(result.queryByText("Click here for an inspirational quøte!")).not.toBeInTheDocument();
        expect(result.container.querySelector(".Quote")).toBeTruthy();
        // expect(result.queryByText("I am a quote - test")).toBeInTheDocument();
        expect(result.queryByText("Nü quøte!")).toBeInTheDocument();

    });

    it("matches snapshot", function () {
        const { container } = render(<RandomInspoQuote />);
        expect(container).toMatchSnapshot();
    });
});