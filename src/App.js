import React from "react";
import SideBar from "../src/components/SideBar";
import Main from "../src/pages/Main";

import { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import HelpData from "./components/HelpData";
import PerfilContainer from "./pages/Perfil";
import LoginComponent from "./components/LoginComponent";
import Register from "./components/Register";
import AboutComponent from "./components/About";
import UserContextProvider from "./context/User";
import PrivateRoute from "./components/PrivateRoute";
import ChangePassword from "./components/ChangePassword";
import MenuMobile from "./components/SideBar/MenuMobile";
import Historial from "./pages/Historial";

class App extends Component {
  render() {
    return (
      <div className="content-my-city">
        { window.innerWidth > 920 ? <SideBar/> : <MenuMobile/> }
        <Router>
          <Switch>
            <PrivateRoute path="/main" component={Main} />
            <Route path="/profile" component={PerfilContainer}></Route>
            <Route path="/reports"></Route>
            <Route path="/history" component={Historial}></Route>
            <Route path="/change-password" component={ChangePassword}></Route>
            <Route path="/help" component={HelpData}></Route>
            <Route path="/about-us" component={AboutComponent}></Route>
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
          <Route exact path="/" component={LoginComponent}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </UserContextProvider>
  );
};
export default MainRouter;
