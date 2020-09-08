import React, { useContext} from "react";
import { UserContext } from "../../context/User";

import {Route } from "react-router-dom";

const PrivateRoute = (props) => {
  const context = useContext(UserContext);
  console.log(context)
  
  return <Route {...props}></Route>;
};

export default PrivateRoute;
