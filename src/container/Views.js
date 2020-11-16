import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

const Views = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
    </Switch>
  );
};

export default Views;
