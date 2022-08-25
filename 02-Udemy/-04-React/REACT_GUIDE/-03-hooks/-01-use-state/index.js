import { useState } from "react";

function App() {
  const [user, setUser] = useState({ name: "ali", age: 19 });
  const [num, setNum] = useState(20);

  // NOT MERGE the object it REPLACE the object
  const changeNameHandler = (e) => {
    setUser((previousState) => {
      return {
        ...previousState,
        name: e.target.value,
      };
    });
  };

  const changeAgeHandler = (e) => {
    setUser((previousState) => {
      return {
        ...previousState,
        age: e.target.value,
      };
    });
  };

  const changeNumHandler = (e) => {
    setNum(e.target.value);
  };

  return (
    <>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{num}</p>
      <input
        onChange={changeNameHandler}
        type={"text"}
        placeholder={"change the name"}
      />
      <input
        onChange={changeAgeHandler}
        type={"number"}
        placeholder={"change the age"}
      />
      <input
        onChange={changeNumHandler}
        type={"number"}
        placeholder={"change the Num"}
      />
    </>
  );
}

export default App;
