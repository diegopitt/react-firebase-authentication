import React, { Component } from "react";
import { firebase } from '../firebase/firebase.js';
import { AuthContext } from "./AuthContext";

export class AuthProviderImpl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: localStorage.getItem('isAuthenticated'),
      userID: localStorage.getItem('userID'),
      user: localStorage.getItem('user'),
      dbRef: firebase.database()
    }
  }
  authListener() {
    this.fireBaseListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('saving user');
        localStorage.setItem('user', user);
        localStorage.setItem('isAuthenticated', true);
        localStorage.setItem('userID', user.uid);
        this.setState({
          isAuthenticated: true,
          userID: user.uid,
          user: user
        })
      } else {
        console.log('user removed');
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userID');
        this.setState({
          isAuthenticated: false,
          userID: null, 
          accountType: null,
          user: {}
        });
      }
    });
  }
  authenticate = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
      localStorage.setItem('user', firebase.auth().currentUser);
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('userID', user.uid);
      this.setState({
        isAuthenticated: true,
        userID: user.uid,
        user: firebase.auth().currentUser
      })
      return user;
    }).catch((error) => {
      console.log(error.message);
    });
  }
  signout = () => {
    firebase.auth().signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userID');
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
