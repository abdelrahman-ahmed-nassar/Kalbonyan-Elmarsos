import React, { Fragment, useState, useRef } from "react";

import Card from "../UI/Card";

import classes from "./AddUser.module.css";

import Button from "../UI/Button";

// import ErrorModal from "../UI/ErrorModal";

import { usersActions } from "../../store/users-slice";
import { uiActions } from "../../store/ui-slice";

import { useDispatch } from "react-redux";

const AddUser = function (props) {
  const dispatch = useDispatch();

  // name
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  // password
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const enteredPasswordIsValid = enteredPassword.trim().length > 6;
  const passwordInputIsInvalid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const passwordInputBlurHandler = () => {
    setEnteredPasswordTouched(true);
  };

  // title
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredTitleTouched, setEnteredTitleTouched] = useState(false);
  const enteredTitleIsValid = enteredTitle.trim() !== "";
  const titleInputIsInvalid = !enteredTitleIsValid && enteredTitleTouched;

  const titleInputChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const titleInputBlurHandler = () => {
    setEnteredTitleTouched(true);
  };

  const fromSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredTitleIsValid) {
      dispatch(
        uiActions.showError({
          title: "INVALID TITLE",
          message: "Title can not be empty!",
        })
      );
      return;
    }

    if (!enteredNameIsValid) {
      dispatch(
        uiActions.showError({
          title: "INVALID USERNAME",
          message: "Username can not be empty!",
        })
      );
      return;
    }

    if (Number.isFinite(+enteredName.slice(0, 1))) {
      dispatch(
        uiActions.showError({
          title: "INVALID USERNAME",
          message: "Username can not start with a number!",
        })
      );
      return;
    }
    if (!enteredPasswordIsValid) {
      dispatch(
        uiActions.showError({
          title: "INVALID PASSWORD",
          message: "Password must be more than 6 characters",
        })
      );
      return;
    }

    setEnteredTitle("");
    setEnteredTitleTouched(false);
    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredPassword("");
    setEnteredPasswordTouched(false);

    dispatch(
      usersActions.addUser({
        name: enteredName,
        password: enteredPassword,
        title: enteredTitle,
        id: Math.random().toString(),
      })
    );
  };

  const nameInputClasses = nameInputIsInvalid
    ? "input-control invalid"
    : "input-control";

  const passwordInputClasses = passwordInputIsInvalid
    ? "input-control invalid"
    : "input-control";

  const titleInputClasses = titleInputIsInvalid
    ? " input-control invalid"
    : "input-control";

  return (
    <Fragment>
      <Card className={classes.input}>
        <form onSubmit={fromSubmitHandler}>
          <h1 className={classes["main-heading"]}>
            <span className={classes["left-dot"]}></span>{" "}
            <span className={classes["heading-text"]}>Passwords Manager</span>
            <span className={classes["right-dot"]}></span>
          </h1>

          <div className={titleInputClasses}>
            <input
              placeholder="Title"
              id="title"
              type="text"
              onChange={titleInputChangeHandler}
              onBlur={titleInputBlurHandler}
              value={enteredTitle}
            ></input>
          </div>
          <div className={nameInputClasses}>
            <input
              placeholder="Username"
              id="username"
              type="text"
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
              value={enteredName}
            ></input>
          </div>
          <div className={passwordInputClasses}>
            <input
              placeholder="Password"
              id="password"
              type="text"
              onChange={passwordInputChangeHandler}
              onBlur={passwordInputBlurHandler}
              value={enteredPassword}
            ></input>
          </div>
          <Button type="submit" className={classes.button}>
            Add User
          </Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
