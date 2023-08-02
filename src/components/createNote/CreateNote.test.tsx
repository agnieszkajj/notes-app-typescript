import { fireEvent, render, screen } from "@testing-library/react";
import CreateNote from "./CreateNote.tsx";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";

beforeEach(() => {
  render(<CreateNote notes={[]} setNotes={() => {}} />);
});

test("inputs should be initially empty", () => {
  const titleInputElement = screen.getByRole("textbox", {
    name: /title/i,
  });
  const textInputElement = screen.getByRole("textbox", { name: /text/i });
  const colorInputElement = screen.getByLabelText(/notes color/i);
  expect((titleInputElement as HTMLInputElement).value).toBe("");
  expect((textInputElement as HTMLInputElement).value).toBe("");
  expect(colorInputElement).toHaveValue("#dfdfdf");
});

test("should be able to type a title", () => {
  const titleInputElement = screen.getByRole("textbox", {
    name: /title/i,
  });
  act(() =>
    fireEvent.change(titleInputElement, {
      target: { value: "meeting" },
    })
  );
  expect((titleInputElement as HTMLInputElement).value).toBe("meeting");
});

test("should be able to type text", () => {
  const textInputElement = screen.getByRole("textbox", { name: /text/i });
  act(() =>
    fireEvent.change(textInputElement, {
      target: { value: "schedule a meeting" },
    })
  );
  expect((textInputElement as HTMLInputElement).value).toBe(
    "schedule a meeting"
  );
});

test("should be able to change color", () => {
  const colorInputElement = screen.getByLabelText(/notes color/i);
  act(() =>
    fireEvent.change(colorInputElement, {
      target: { value: "#3371ff" },
    })
  );
  expect((colorInputElement as HTMLInputElement).value).toBe("#3371ff");
});

test("should not show an error message at the beginning", () => {
  const errorElement = screen.queryByRole("alert");
  expect(errorElement).not.toBeInTheDocument();
});

test("should show an error message if text is empty", () => {
  const textInputElement = screen.getByRole("textbox", { name: /text/i });
  const titleInputElement = screen.getByRole("textbox", {
    name: /title/i,
  });
  const submitButton = screen.getByRole("button", { name: /submit/i });
  act(() =>
    fireEvent.change(textInputElement, {
      target: { value: "" },
    })
  );
  act(() =>
    fireEvent.change(titleInputElement, {
      target: { value: "meeting" },
    })
  );
  act(() => fireEvent.click(submitButton));
  const errorElement = screen.getByRole("alert");
  expect(errorElement).toBeInTheDocument();
});
test("should show an error message if title is empty", () => {
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
      target: { value: "" },
    })
  );
  act(() => fireEvent.click(submitButton));
  const errorElement = screen.getByRole("alert");
  expect(errorElement).toBeInTheDocument();
});
test("should show no error message if every input is valid", () => {
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
  const errorElement = screen.queryByRole("alert");
  expect(errorElement).not.toBeInTheDocument();
});
test("input fields should be empty after adding a note", () => {
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
  expect((textInputElement as HTMLInputElement).value).toBe("");
  expect((titleInputElement as HTMLInputElement).value).toBe("");
});
