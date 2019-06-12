import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import { jobs } from "./pages/jobs";
import { proposals } from "./pages/proposals";
import { signin } from "./pages/signin";
import { contracts } from "./pages/contracts";
import { messages } from "./pages/messages";
import { authWrapper } from "./auth/AuthWrapper";

export const MainConnector = authWrapper(class extends Component {
  selectComponent = (routeProps) => {
    const wrap = (Component) => <Component {...this.props}  {...routeProps}></Component>;
    if (!this.props.isAuthenticated) return wrap(signin);
    switch (routeProps.match.params.section) {
      case "jobs":
        return wrap(jobs);
      case "proposals":
        return wrap(proposals);
      case "contracts":
        return wrap(contracts);
      case "messages":
        return wrap(messages);
      case "signin":
        return wrap(signin);
      default:
        return <Redirect to="/notfound" />
    }
  }

  render() {
    return <Switch>
      <Route path={"/dashboard/:section?"}
        render={routeProps =>
          this.selectComponent(routeProps)} />
    </Switch>
  }
})
