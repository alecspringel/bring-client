import React, { Component } from "react";
// React router will allow us to create routes within the app that will
// be rendered client-side
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import setAuthToken from "./functions/setAuthToken";
import styled from "styled-components";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import AdminPortal from "./components/AdminPortal/AdminPortal";
import Login from "./components/login/Login";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  constructor(props) {
    super(props);
    var auth = false;
    const token = localStorage.getItem("bringToken");
    if(token) {
      auth = true;
      setAuthToken(token);
    }
    this.state = {
      auth,
    }
    this.setAuth = this.setAuth.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  setAuth() {
    this.setState({ auth: !this.state.auth })
  }

  signOut() {
    this.setState({ auth: false });
    localStorage.removeItem("bringToken");
    setAuthToken(null);
  }

  render() {
    return (
      <Router>
        <Content className="App">
          <div className="footer-wrapper">
            <Header />
            <div className="content container margin-t20">
              <Switch>
                <Route path="/" exact>
                  <Form />
                </Route>
                <Route path="/admin">
                  <PrivateRoute
                    path="/admin"
                    component={AdminPortal}
                    auth={this.state.auth}
                  />
                </Route>
                <Route path="/login">
                  <Login exact setAuth={this.setAuth} auth={this.state.auth} />
                </Route>
              </Switch>
            </div>
            <Footer signOut={this.signOut} auth={this.state.auth}/>
          </div>
        </Content>
      </Router>
    );
  }
}

export default App;

// This will allow us to keep the footer at the bottom of the page
// on pages that aren't at least 100vh
const Content = styled.div`
  position: relative;
  min-height: 100vh;
`;
