import UserFinder from './components/UserFinder';

import UsersContext from './store/users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'max' },
  { id: 'u2', name: 'manuel' },
  { id: 'u3', name: 'julie' },
  { id: 'u4', name: 'adam' },
  { id: 'u5', name: 'yousef' },
  { id: 'u6', name: 'mansour' },
  { id: 'u7', name: 'ahmed' },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
