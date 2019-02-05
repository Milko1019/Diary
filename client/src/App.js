import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Journal from "./pages/Journal";
import Entries from "./pages/Entries";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Nav />
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/journal" component={Journal} />
              <Route path="/entry" component={Entries} />
              <Route exact path={`/journal/search`} component={Search} />
              {/* <Route exact path="/search" component={Search} /> */}
            </div>
        </>
      </Router>
    );
  }
}

export default App;
