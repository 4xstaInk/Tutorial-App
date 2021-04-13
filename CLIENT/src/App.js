import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import faStyles from "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import addTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            <i className="fa fa-home  mr-5"></i>
            4xsta Ink
            <FontAwesome
              className="home"
              name="rocket"
              cssModule={faStyles}
              size="2x"
              style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
            />
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={addTutorial} />
            <Route exact path="/tutorials/:id" component={Tutorial} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
