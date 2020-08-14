import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { smurfReducer } from './reducers/smurfReducer'
import "./index.css";
import App from "./components/App";
import SmurfProfile from './components/SmurfProfile'

const store = createStore(smurfReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/profile/:smurfId' component={SmurfProfile} />
        <Route path='/' component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
