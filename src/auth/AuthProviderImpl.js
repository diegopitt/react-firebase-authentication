import React, { Component } from "react";
import { firebase } from '../firebase/firebase.js';
import { AuthContext } from "./AuthContext";

export class AuthProviderImpl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      userID: null,
      accountType: null,
      dbRef: firebase.database()
    }
  }
  authListener() {
    this.fireBaseListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isAuthenticated: true,
          userID: user.uid,
          user: user
        })
      } else {
        this.setState({
          isAuthenticated: false,
          userID: null, 
          accountType: null
        });
      }
    });
  }
  authenticate = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
      this.setState({
        isAuthenticated: true,
        userID: firebase.auth().currentUser.uid,
        user: firebase.auth().currentUser
      })
    }).catch((error) => {
      console.log(error.message);
    });
  }
  signout = () => {
      firebase.auth().signOut().then(() => {
        this.setState({ isAuthenticated: false, userID: null, accountType: null });
  }).catch(function(error) {
    console.log(error);
  });
    
  }
  componentWillMount() {
    this.authListener = this.authListener.bind(this);
    this.authListener();
  }
  componentWillUnmount() {
    this.fireBaseListener && this.fireBaseListener();
    this.authListener = undefined;
  }
  render = () =>
    <AuthContext.Provider value={{
      ...this.state,
      authenticate: this.authenticate, signout: this.signout
    }}>
      {this.props.children}
    </AuthContext.Provider>
}
