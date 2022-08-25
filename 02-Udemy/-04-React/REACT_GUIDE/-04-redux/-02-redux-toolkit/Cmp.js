import React from "react";
import { useSelector } from "react-redux";
import { pomodoroActions } from "../store/pomodoro-slice";
import { useDispatch } from "react-redux";

const Cmp = () => {
  const dispatch = useDispatch();
  const sessions = useSelector((state) => state.pomodoro.sessions);
  return (
    <>
      <div>{sessions}</div>
      <button
        onClick={() => {
          dispatch(pomodoroActions.changeSessions(3));
        }}
      >
        change
      </button>
    </>
  );
};

export default Cmp;
