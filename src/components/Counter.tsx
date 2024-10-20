import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const onIncrement = () => {
    setCount(count + 1);
  };

  const onAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(event.target.value, 10));
  };

  const onAmountCountSet = () => {
    setCount(amount);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={onIncrement}>
        Increment
      </button>
      <input
        title="amount-input-field"
        type="number"
        name="amount"
        value={amount}
        onChange={onAmountChange}
      />
      <button type="button" onClick={onAmountCountSet}>
        Set
      </button>
    </div>
  );
};

export default Counter;
