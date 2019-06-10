import React from "react";

export const AuthContext = React.createContext({
  isAuthenticated: false,
  userID: null,
  accountType: null,
  authenticate: (username, password) => { },
  signout: () => { }
})
