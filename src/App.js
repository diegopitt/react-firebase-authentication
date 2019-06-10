import React, { Component } from 'react';
import { AuthProviderImpl } from "./auth/AuthProviderImpl";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { MainConnector } from "./MainConnector";
import './App.css';

export default class App extends Component {
  render() {
    return <AuthProviderImpl>
      <Router>
        <Switch>
          <Route path="/dashboard" component={MainConnector} />
          <Redirect to="/dashboard/jobs" />
        </Switch>
      </Router>
    </AuthProviderImpl>
  }
}