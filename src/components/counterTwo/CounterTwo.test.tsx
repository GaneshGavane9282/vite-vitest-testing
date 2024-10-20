import { render, screen } from "@testing-library/react";
import CounterTwo from "./CounterTwo";
import { vi } from "vitest";
import user from "@testing-library/user-event";

describe("CounterTwo Component", () => {
  test("should render count correctly", () => {
    render(<CounterTwo count={0} />);
    const countElement = screen.getByText("Counter Two");
    expect(countElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();
    const incrementHandler = vi.fn();
    const decrementHandler = vi.fn();
    render(
      <CounterTwo
        count={0}
        handleDecrement={incrementHandler}
        handleIncrement={decrementHandler}
      />
    );
    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });
    const decrementButton = screen.getByRole("button", {
      name: /decrement/i,
    });
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
