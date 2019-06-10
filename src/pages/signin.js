import React, { Component } from "react";
import { ValidatedForm } from "../forms/ValidatedForm";
export const signin = class extends Component {
  constructor(props) {
    super(props);
    this.formModel = [
      { label: "Email", attrs: { type: "text", required: true } },
      { label: "Password", attrs: { type: "Password", required: true } }]
  }
  handleSubmit(formData) {
    this.props.authenticate(formData.email, formData.password)
  }
  handleSignOut() {
    this.props.signout();
  }
  componentDidMount() {}
  render() {
    if (!this.props.isAuthenticated) {
      return (
        <div className="display">
          <h1>Sign In</h1>
          <ValidatedForm formModel={this.formModel}
            defaultAttrs={this.defaultAttrs}
            submitCallback={this.handleSubmit.bind(this)}
            cancelCallback={this.handleSignOut.bind(this)}
            submitText="Sign In"
            cancelText="Cancel" />
        </div>
      );
    }
    if (this.props.isAuthenticated) { 
      return (
        <button onClick={this.handleSignOut.bind(this)}>
          Sign Out
        </button>
      );
    }
    
  }
}