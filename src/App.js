import React, { Component } from "react";
// React router will allow us to create routes within the app that will
// be rendered client-side
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import setAuthToken from "./functions/setAuthToken";
import styled from "styled-components";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import DonationFeed from "./components/donationFeed/DonationFeed";
import Login from "./components/login/Login";
import PrivateRoute from "./components/PrivateRoute";
import DonationHistory from "./components/donationHistory/DonationHistory";

class App extends Component {
  constructor(props) {
    super(props);
    var auth = false;
    const token = localStorage.getItem("bringToken");
    if (token) {
      auth = true;
      setAuthToken(token);
    }
    this.state = {
      auth,
    };
    this.setAuth = this.setAuth.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  setAuth() {
    this.setState({ auth: !this.state.auth });
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
                <PrivateRoute
                  exact
                  path="/admin"
                  component={DonationFeed}
                  auth={this.state.auth}
                />
                <PrivateRoute
                  exact
                  path="/admin/history"
                  component={DonationHistory}
                  auth={this.state.auth}
                />
                <Route path="/login">
                  <Login exact setAuth={this.setAuth} auth={this.state.auth} />
                </Route>
              </Switch>
            </div>
            <Footer signOut={this.signOut} auth={this.state.auth} />
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
