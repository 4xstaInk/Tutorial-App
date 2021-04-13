import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import addTutorial from './components/add-tutorial.component';
import Tutorial from './components/tutorial.component';
import TutorialsList from './components/tutorials-list.component';



import App from '../src/App.js'

class Routes extends Component {
    render() {

        return (
            <App>
                <Switch>
                    <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
                    <Route exact path="/add" component={addTutorial} />
                    <Route exact path="/tutorials/:id" component={Tutorial} />

                </Switch>
            </App>

        )
    }
}

export default Routes;