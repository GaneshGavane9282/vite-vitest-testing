import { screen } from "@testing-library/react";
import MuiMode from "./MuiMode";
import CustomRender from "../../Test-utils";

describe("MuiMode", () => {
  test("renders Text correctly", () => {
    CustomRender(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(/dark mode/i);
  });
});
