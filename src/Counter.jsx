import { useState } from "react";

const Counter = () => {
    // using state
    const [count, setCount] = useState(0);
    // calling function onClick 
    function onIncrement() {
        setCount(count + 1);
    };
    // calling function onClick
    function onDecrement() {
        setCount(count - 1);
    };
    // calling function onClick
    function onReset() {
        setCount(0);
    }

    // render html
    return (
  <div>
    <h1>Counter: {count}</h1>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
    <button onClick={onReset}>Reset</button>
  </div>
  );

}
export default Counter;
