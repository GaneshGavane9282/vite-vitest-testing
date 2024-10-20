import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("User Component", () => {
  test("render correctly", () => {
    render(<Users />);
    const textElement = screen.getByText(/users/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Users />);
    const userElements = await screen.findAllByRole("listitem");
    expect(userElements).toHaveLength(3);
  });
});
