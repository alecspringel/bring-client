import React from "react";
// React router will allow us to create routes within the app that will
// be rendered client-side
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import AdminPortal from "./components/adminPortal/AdminPortal";

function App() {
  return (
    <Router>
      <Content className="App">
        <Header />
        <div className="container margin-t20">
          <Switch>
            <Route path="/" exact>
              <Form />
            </Route>
            <Route path="/admin">
              <AdminPortal exact/>
            </Route>
          </Switch>
        </div>
        <Footer />
      </Content>
    </Router>
  );
}

export default App;

// This will allow us to keep the footer at the bottom of the page
// on pages that aren't at least 100vh
const Content = styled.div`
  position: relative;
  min-height: 100vh;
`;
