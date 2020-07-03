import React from "react";
import SideBar from "../src/components/SideBar";
import UploadReport from "../src/components/UploadReport";
import BtnBuscar from "../src/components/BtnBuscar";
import PublicReport from "../src/components/PublicReport";
import Main from "../src/pages/Main";

import { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="content-my-city">{" "}{/*Este div hay corregirlo*/}
        
        <SideBar></SideBar>
        <Router>
          <Switch>
            <Route path="/main">
              <Main />
            </Route>

            <Route path="/perfil"></Route>
            <Route path="/reportes"></Route>
            <Route path="/historial"></Route>
            <Route path="/seguirCaso"></Route>
            <Route path="/sobreNos"></Route>
            <Route path="/ayuda"></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
