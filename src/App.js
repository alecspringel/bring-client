import React, { Component } from "react";
// React router will allow us to create routes within the app that will
// be rendered client-side
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import DonationFeed from "./components/donationFeed/DonationFeed";
import Login from "./components/login/Login";
import PrivateRoute from "./components/PrivateRoute";
import DonationHistory from "./components/donationHistory/DonationHistory";
import ManageUsers from "./components/manageUsers/ManageUsers";
import AdminSignUp from "./components/finishSignUp/AdminSignUp";
import ResetLink from "./components/resetLink/ResetLink";
import ResetPassword from "./components/resetPassword/ResetPassword";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ManageResponses from "./components/manageResponses/ManageResponses";
// import { UserContext, UserDispatchContext } from "./context/UserProvider";

class App extends Component {
  render() {
    return (
      <Router>
        <Content className="App">
          <div className="footer-wrapper">
            <Header />
            <Switch>
              <Route path="/" exact>
                <Form />
              </Route>
              <PrivateRoute exact path="/admin" component={DonationFeed} />
              <PrivateRoute
                exact
                path="/admin/history"
                component={DonationHistory}
              />
              <PrivateRoute
                exact
                path="/admin/manage"
                component={ManageUsers}
              />
              <PrivateRoute
                exact
                path="/admin/responses"
                component={ManageResponses}
              />
              <Route exact path="/admin/signup">
                <AdminSignUp />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/login/reset" exact>
                <ResetLink />
              </Route>
              <Route path="/login/reset/password/:tokenId/:hashedId" exact>
                <ResetPassword />
              </Route>
            </Switch>
            <Footer signOut={this.signOut} />
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
