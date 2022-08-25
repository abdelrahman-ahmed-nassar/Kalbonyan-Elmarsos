import React, { useReducer } from "react";

const userInitialState = { name: "ali", age: 10 };

// NOT MERGE object, it replace it
const userReducer = (state, action) => {
  if (action.type === "INCREASE_AGE") {
    return { ...state, age: state.age++ };
  }

  return userInitialState;
};

const App = () => {
  const [userState, dispatchUser] = useReducer(userReducer, userInitialState);
  return (
    <div>
      <p>{userState.name}</p>
      <p>{userState.age}</p>

      <button onClick={() => dispatchUser({ type: "INCREASE_AGE" })}>
        increase user
      </button>
    </div>
  );
};

export default App;
