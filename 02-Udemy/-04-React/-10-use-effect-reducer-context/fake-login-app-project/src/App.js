import React, { useContext } from 'react';

import AuthContext from './store/auth-context';

import Login from './components/Login/Login';

import Home from './components/Home/Home';

import MainHeader from './components/MainHeader/MainHeader';


function App() {

  const ctx = useContext(AuthContext)

  return (
    <React.Fragment>
      <MainHeader onLogout={ctx.logoutHandler} />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
