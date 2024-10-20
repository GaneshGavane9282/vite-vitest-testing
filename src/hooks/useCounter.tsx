import { useState } from "react";
import { UseCounterProp } from "./useCounter.types";

const useCounter = ({ initialCount = 0 }: UseCounterProp = {}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};

export default useCounter;
