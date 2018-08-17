import React, { Component } from "react";
import Header from "./Components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contacts from "./Components/Contact/Contacts";
import { Provider } from "./Context";
import About from "./Components/pages/About";
import AddContact from "./Components/Contact/AddContact";
import EditContact from "./Components/Contact/EditContact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./Components/pages/NotFound";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager!!" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
