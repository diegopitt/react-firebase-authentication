import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import Dashboard from "./layout/Dashboard";
import { authWrapper } from "./auth/AuthWrapper";

export const MainConnector = authWrapper(class extends Component {
  selectComponent = (routeProps) => {
    const wrap = (Component) => <Component {...this.props}  {...routeProps}></Component>;
    if (!localStorage.getItem('isAuthenticated')) return <Redirect to="/login" />;
    if (routeProps.match.params.section) {
      return wrap(Dashboard);
    }
  }

  render() {
    return <Switch>
      <Route path={`/dashboard/:section?`} render={routeProps => this.selectComponent(routeProps)} />
    </Switch>
  }
})
