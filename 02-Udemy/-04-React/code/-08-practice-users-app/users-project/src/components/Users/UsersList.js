// import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../UI/Card";

import classes from "./UsersList.module.css";

import { uiActions } from "../../store/ui-slice";

const UserList = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const deleteItemHandler = (event) => {
    dispatch(uiActions.showConfirming(event.target.id));
  };

  return (
    <Card className={classes.users}>
      <ul className={classes["users-list"]}>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <div className={classes["text-container"]}>
                <p className={classes.title}>{user.title}</p>
                <p className={classes.name}>{user.name}</p>
                <p className={classes.password}>{user.password}</p>
              </div>
              <div className={classes["btn-container"]}>
                <button id={user.id} onClick={deleteItemHandler}>
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default UserList;
