import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import jobs from "./pages/jobs";
import job from "./pages/job";
import { proposals } from "./pages/proposals";
import { contracts } from "./pages/contracts";
import { messages } from "./pages/messages";
import { authWrapper } from "./auth/AuthWrapper";

export const MainConnector = authWrapper(class extends Component {
  selectComponent = (routeProps) => {
    const wrap = (Component) => <Component {...this.props}  {...routeProps}></Component>;
    if (!this.props.isAuthenticated) return <Redirect to="/login" />;
    switch (routeProps.match.params.section) {
      case "jobs":
        return wrap(jobs);
      case "proposals":
        return wrap(proposals);
      case "contracts":
        return wrap(contracts);
      case "messages":
        return wrap(messages);
      default:
        return <Redirect to="xxx" />
    }
  }

  render() {
    return <Switch>
      <Route exact path={`/dashboard/:section?`} render={routeProps => this.selectComponent(routeProps)} />
      <Route exact path={`/dashboard/jobs/:jobID?`} component={job} />
    </Switch>
  }
})
