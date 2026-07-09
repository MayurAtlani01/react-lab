import { useState } from "react";

function State() {
  const [count, setCount] = useState(0);

  function decrease() {
    setCount(count - 1);
  }

   function increase() {
    setCount(count + 1);
  }


  return (
    <>
      <h1>Count: {count}</h1>

      <p>Hey my count is {count}</p>

      <p>I am learning React {count}</p>

      <button onClick={increase}>
        Increase Count
      </button>

      <button onClick={decrease}>
        Decrease Count
      </button>
    </>
  );
}

export default State;