import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

/*
 *   Greet should render the text hello and if a name is passed into the component
 *   it should render hello followed by the name
 */

test("Greet renders correctly", () => {
  render(<Greet />);

  const textElement = screen.getByText(/Hello/i);
  expect(textElement).toBeInTheDocument();
});

/*
 *   It should render hello followed by name
 */

test("Great renders with name correctly", () => {
  render(<Greet name="John" />);
  const textElement = screen.getByText("Hello John");
  expect(textElement).toBeInTheDocument();
});
