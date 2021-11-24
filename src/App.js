import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <p>I will be the sign in page</p>
        </Route>
        <Route path="/signup">
          <p>I will be the sign up page</p>
        </Route>
        <Route path="/browse">
          <p>I will be the browse page, also known as the home page</p>
        </Route>
        <Route exact path="/">
          <p>
            I am going to be the best ever streaming platform, kind of like
            Netflix, but only featuring wholesomeness for my habibi
          </p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
