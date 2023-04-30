// import logo from './logo.svg';
import "./App.css";
import React from "react";
import User from "./User";
import Nav from "./Navbar" ;
import Cart from './Cart' ;
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from './utils/store' ;


function App() {
  return (
    <Provider store={store}>
       <Router>
      <div className="App">
      <Nav />
      <Switch>
          <Route path="/cart">
            <Cart />
            </Route>

            <Route path="/">
            <User />
            </Route>
        </Switch>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
