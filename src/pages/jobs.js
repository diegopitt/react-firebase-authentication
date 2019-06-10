import React, { Component } from "react";

export const jobs = class extends Component {
  componentDidMount() {
    //this.props.authenticate("demo@demo.com", "password");
    console.log(this.props.isAuthenticated.toString());
  }
  render() {
    return <p>isAuthenticated:{this.props.isAuthenticated.toString()}</p>
  }
}