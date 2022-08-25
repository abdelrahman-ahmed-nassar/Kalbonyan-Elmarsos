import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

const app = () => {
  return (
    <Switch>
      <Route path="/welcome">
        <Home />
      </Route>
      <Route path="/More" exact>
        <More />
      </Route>
      <Route path="*" exact>
        <Error />
      </Route>
    </Switch>
  );
};

export default app;
