import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";

beforeEach(() => {
  render(<App />);
});

test("should add an item", () => {
  const textInputElement = screen.getByRole("textbox", { name: /text/i });
  const titleInputElement = screen.getByRole("textbox", {
    name: /title/i,
  });
  const submitButton = screen.getByRole("button", { name: /submit/i });
  act(() =>
    fireEvent.change(textInputElement, {
      target: { value: "schedule a meeting" },
    })
  );
  act(() =>
    fireEvent.change(titleInputElement, {
      target: { value: "meeting" },
    })
  );
  act(() => fireEvent.click(submitButton));
  const divElements = screen.getAllByTestId("note-container");
  expect(divElements.length).toBe(2);
});

test("should delete a note", () => {
  const deleteButton = screen.getByRole("button", { name: /delete/i });
  act(() => fireEvent.click(deleteButton));
  const divElement = screen.queryByTestId("note-container");
  expect(divElement).not.toBeInTheDocument();
});
