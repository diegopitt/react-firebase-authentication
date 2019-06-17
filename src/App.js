import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { AuthProviderImpl } from "./auth/AuthProviderImpl";
import { MainConnector } from "./MainConnector";
import { login } from "./pages/login";

const App = () => {
  return (
    <Router history={Router.hashHistory} >
      <AuthProviderImpl>
        <Route path="/dashboard" component={MainConnector} />
        <Route path="/login" component={login} />
        <Redirect from="/" to="/dashboard/jobs" />
      </AuthProviderImpl>
    </Router>
  );
}
export default App;