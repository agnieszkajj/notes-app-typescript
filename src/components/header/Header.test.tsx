import { render, screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom/extend-expect";

test("header renders correctly", () => {
  render(<Header></Header>);
  const headerElement = screen.getByText(/notes app/i);
  expect(headerElement).toBeInTheDocument();
});
