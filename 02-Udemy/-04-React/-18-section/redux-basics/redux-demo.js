// importing redux to use it with the node js syntax
const redux = require("redux");

// the reducer function that will be executed when ever a action is dispatched
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};
// create a store
const store = redux.createStore(counterReducer);

// access the data via subscriber
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
// let the subscriber have access to the data
store.subscribe(counterSubscriber);

// dispatch actions
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
