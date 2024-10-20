import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import App from "./App";

// describe("App component", () => {
//   test("renders Vite and React logos", () => {
//     render(<App />);

//     // Check if Vite logo is in the document
//     const viteLogo = screen.getByAltText("Vite logo");
//     expect(viteLogo).toBeInTheDocument();

//     // Check if React logo is in the document
//     const reactLogo = screen.getByAltText("React logo");
//     expect(reactLogo).toBeInTheDocument();
//   });

//   test("renders initial count and updates on button click", async () => {
//     render(<App />);

//     // Check if the initial count is rendered
//     const countButton = screen.getByRole("button", { name: /count is 0/i });
//     expect(countButton).toBeInTheDocument();

//     // Simulate a click and check if the count updates
//     await userEvent.click(countButton);
//     expect(countButton).toHaveTextContent("count is 1");
//   });
// });

// test("App renders correctly", () => {
//   render(<App />);

//   const nameElement = screen.getByRole("button", {
//     name: /set/i,
//   });
//   expect(nameElement).toBeInTheDocument();
// });

test("App renders correctly", () => {
  render(<App />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});
