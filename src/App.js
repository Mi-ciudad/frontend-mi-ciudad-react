import React from "react";
import SideBar from "../src/components/SideBar";
import Main from "../src/pages/Main";

import { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import HelpData from "./components/HelpData";
import PerfilContainer from "./pages/Perfil";
import LoginComponent from "./components/LoginComponent";
import Register from "./components/Register";
import RecoverPasswordComponent from "./components/RecoverPasswordComponent";
import AboutComponent from "./components/About";
import UserContextProvider from "./context/User";
import PrivateRoute from "./components/PrivateRoute";
import CaseTrackingComponent from "./components/CaseTracking";

class App extends Component {
  render() {
    return (
      <div className="content-my-city">
        <SideBar/>
        <Router>
          <Switch>
            <PrivateRoute path="/main" component={Main} />
            <Route path="/perfil" component={PerfilContainer}></Route>
            <Route path="/reportes"></Route>
            <Route path="/historial"></Route>
            <Route path="/seguimiento-casos" component={CaseTrackingComponent}></Route>
            {/* <Route path="/sobreNos"></Route> */}
            <Route path="/ayuda" component={HelpData}></Route>
            <Route path="/sobreNosotros" component={AboutComponent}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const MainRouter = () => {
  return (
    <UserContextProvider>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginComponent}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/recover-password" component={RecoverPasswordComponent}></Route>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </UserContextProvider>
  );
};
export default MainRouter;
