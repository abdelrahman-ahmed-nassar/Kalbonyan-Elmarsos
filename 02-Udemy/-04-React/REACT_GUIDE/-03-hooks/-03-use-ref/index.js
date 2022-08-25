import React, { useRef } from "react";

const App = function () {
  const userInputRef = useRef();
  // the actual DOM Node

  return (
    <>
      <form>
        <input ref={userInputRef} placeholder="enter your name"></input>
        <button type="button" onClick={() => console.log(userInputRef)}>
          Access Dom Node
        </button>
        <button
          type="button"
          onClick={() => console.log(userInputRef.current.value)}
        >
          Access Data
        </button>
      </form>
    </>
  );
};

export default App;
