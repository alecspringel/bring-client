import React, { Component } from "react";
import styled from "styled-components";
import {withRouter} from 'react-router-dom';
import { post } from "axios";
import setAuthToken from "../../functions/setAuthToken";
import jwt_decode from "jwt-decode";
import TextInput from "../general/TextInput";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth) {
      this.props.history.push("/admin");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth) {
      this.props.history.push("/admin"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_SERVER_URL;
    const endpoint = "/api/user/login";
    const userData = {
      username: this.state.username,
      password: this.state.password,
    };
    post(url + endpoint, userData)
    .then((res) => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;

      // Decode token to get user data
      const decoded = jwt_decode(token);
      if(decoded.auth) {
        localStorage.setItem("bringToken", token);
        // Set token to Auth header
        setAuthToken(token);
        this.props.setAuth(decoded.auth);
      }
    })
  };

  render() {
    return (
      <Background className="flex-row">
        <FormWrapper className="flex-col text-center">
          <h2 className="margin-tb20">Admin Login</h2>
          <TextInput
            placeholder="User Name"
            className="margin-b10"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          />
          <TextInput
            placeholder="Password"
            className="margin-b10"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <input
            className="button primary-btn"
            label="Sign In"
            type="submit"
            onClick={this.onSubmit}
          />
        </FormWrapper>
      </Background>
    );
  }
}

export default withRouter(Login);

const Background = styled.div`
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 300px;
  margin: auto; ;
`;

const FormWrapper = styled.form`
  width: 100%;
`;
