import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    /*
     * getByRole query method
     */
    const pageHeading = screen.getByRole("heading", {
      // name: /Job application form/i,
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      // name: "Section 1",
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();

    /*
     * getByLabelText query method
     */
    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    /*
     * getByPlaceholderText
     */
    const nameElement3 = screen.getByPlaceholderText("FullName");
    expect(nameElement3).toBeInTheDocument();

    /*
     * getByText
     */
    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    /*
     * getByDisplayValue
     */
    const nameElement4 = screen.getByDisplayValue("Ganesh");
    expect(nameElement4).toBeInTheDocument();

    /*
     * getByAltText
     */
    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    /*
     * getByTitle
     */
    const spanElement = screen.getByTitle("close");
    expect(spanElement).toBeInTheDocument();

    /*
     * getByTestId
     */
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
  });
});
