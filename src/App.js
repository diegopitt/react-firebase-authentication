import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { AuthProviderImpl } from "./auth/AuthProviderImpl";
import { MainConnector } from "./MainConnector";
import login from "./pages/login";
const App = () => {
  return (
    <Router history={Router.hashHistory} >
      <AuthProviderImpl>
        <Switch>
          <Redirect exact from="/" to="/dashboard/jobs" />
          <Route path="/dashboard" component={MainConnector} />
          <Route path="/login" component={login} />
        </Switch>
      </AuthProviderImpl>
    </Router>
  );
}
export default App;