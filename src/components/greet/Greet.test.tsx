import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

/*
 *   Greet should render the text hello and if a name is passed into the component
 *   it should render hello followed by the name
 */

// describe("Greet", () => {
//   /*
//    *  test.skip("Greet renders correctly", () => {
//    */
//   test("Greet renders correctly", () => {
//     render(<Greet />);

//     const textElement = screen.getByText("Hello Guest");
//     expect(textElement).toBeInTheDocument();
//   });

//   /*
//    *   It should render hello followed by name
//    */

//   /*
//    *
//    * describe("Nested", () => {
//    * test.only("Great renders with name correctly", () => {
//    * test("Great renders with name correctly", () => {
//    *     render(<Greet name="John" />);
//    *     const textElement = screen.getByText("Hello John");
//    *     expect(textElement).toBeInTheDocument();
//    *  });
//    * });
//    */
// });

describe("Nested", () => {
  test("Greet renders with name correctly", () => {
    render(<Greet name="Ganesh" />);
    const textElement = screen.getByText("Hello Ganesh");
    expect(textElement).toBeInTheDocument();
  });
});
