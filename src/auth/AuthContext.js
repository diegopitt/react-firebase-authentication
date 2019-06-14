import React from "react";
export const AuthContext = React.createContext({
  isAuthenticated: localStorage.getItem('isAuthenticated'),
  userID: localStorage.getItem('userID'),
  user: localStorage.getItem('user'),
  accountType: null,
  authenticate: (username, password) => { },
  signout: () => { }
})
