import React, { useContext, createContext } from "react";
import { UserContext } from "../../context/User";

import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
  const context = useContext(UserContext);
  console.log(context)
  const currentUser = context.user;

//   //usuario no creado, redirige a login
//   if (!currentUser) {
//     window.location = '/login'
//   }
  // le pasamos al route todas las props que se le pasan a privateRoute
  return <Route {...props}></Route>;
};

export default PrivateRoute;
