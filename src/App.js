import "./App.css";
import React from "react";
import { increment, decrement, counterActions } from "../src/counterSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="App">
      <h2>Your count {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
