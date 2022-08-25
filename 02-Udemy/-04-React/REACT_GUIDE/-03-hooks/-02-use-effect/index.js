import React, { useEffect, useState } from "react";

const App = function (props) {
  const [num, setNum] = useState(1);
  // it is executed after every component re-evaluation.
  useEffect(() => {
    console.log("Effect Running!");
  });
  // run for the first time the component render
  useEffect(() => {
    console.log("Effect Running!");
  }, []);

  // clean-up function

  useEffect(() => {
    console.log("Effect Running!");

    // run before the code
    // But
    // Not before the first time it runs
    return () => {
      console.log("clean up");
    };
  }, []);

  return (
    <>
      <p>{num}</p>
    </>
  );
};

export default App;
