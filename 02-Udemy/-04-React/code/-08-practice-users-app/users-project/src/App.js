import { Fragment, useEffect } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useSelector, useDispatch } from "react-redux";
import ErrorModal from "./components/UI/ErrorModal";
import { uiActions } from "./store/ui-slice";
import ConfirmModal from "./components/UI/ConfirmModal";
import { usersActions } from "./store/users-slice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const showErr = useSelector((state) => state.ui.hasError);
  const error = useSelector((state) => state.ui.error);
  // confirming
  const isConfirming = useSelector((state) => state.ui.isConfirming);
  const currentId = useSelector((state) => state.ui.currentInputId);

  const hideErrorHandler = () => {
    dispatch(uiActions.hideError());
  };

  const confirmDeletionHandler = () => {
    dispatch(usersActions.deleteUser(currentId));
    dispatch(uiActions.hideConfirming());
  };
  const cancelConfirmingHandler = () => {
    dispatch(uiActions.hideConfirming());
  };

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      if (!localStorage.getItem("users")) return;
      dispatch(
        usersActions.replaceUsers(JSON.parse(localStorage.getItem("users")))
      );
      return;
    }
    localStorage.setItem("users", JSON.stringify(users));
  }, [users, dispatch]);

  return (
    <Fragment>
      {showErr && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={hideErrorHandler}
        />
      )}
      {isConfirming && (
        <ConfirmModal
          title={"DELETE USER"}
          message={"Are you sure you want to delete this user ?"}
          onConfirm={confirmDeletionHandler}
          onCancel={cancelConfirmingHandler}
        />
      )}
      <AddUser></AddUser>
      {users.length > 0 ? (
        <UsersList></UsersList>
      ) : (
        <div className="message-container">
          <p className="empty-message">Start by adding new user</p>
          <ion-icon name="happy-outline"></ion-icon>
        </div>
      )}
    </Fragment>
  );
}

export default App;
