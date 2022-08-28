import { useSelector, useDispatch } from "react-redux";

import { counterAction } from "../store/counter-slice.js";

import classes from "./Counter.module.css";

const Counter = () => {

  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  const incrementBtnHandler = () => {
    dispatch(counterAction.increment());
  };

  const decrementBtnHandler = () => {
    dispatch(counterAction.decrement());
  };

  const increaseBy5Handler = () => {
    dispatch(counterAction.increaseBy5(5));
  };
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {state.counter.show && (
        <div className={classes.value}>{state.counter.counter}</div>
      )}
      <button onClick={incrementBtnHandler}>Increment </button>
      <button onClick={increaseBy5Handler}>Increment By 5 </button>
      <button onClick={decrementBtnHandler}>Decrement </button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
