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

class App extends Component {
  render() {
    return (
      <div className="content-my-city">
        {" "}
        {/*Este div hay corregirlo*/}
        <SideBar></SideBar>
        <Router>
          <Switch>
            <PrivateRoute path="/main" component={Main} />
            <Route path="/profile" component={PerfilContainer}></Route>
            <Route path="/reports"></Route>
            <Route path="/history" component={HistoryData}></Route>
            <Route path="/tracking-case" component={CaseTrackingComponent}></Route>
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
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginComponent}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/recover-password" component={RecoverPasswordComponent}></Route>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
};
export default MainRouter;
