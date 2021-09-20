import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsletterForm from "./NewsletterForm";
import Confirmation from "./Confirmation";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NewsletterForm />
        </Route>
        <Route exact path="/subscribed">
          <Confirmation />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
