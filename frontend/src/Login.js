import React, { Component } from "react";
import swal from "sweetalert";
import { Button, TextField, Link } from "@material-ui/core";
import { withRouter } from "./utils";
import axios from "axios";
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  login = () => {
    const pwd = bcrypt.hashSync(this.state.password, salt);

    axios.post('http://localhost:2000/login', {
      username: this.state.username,
      password: pwd,
    }).then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.id);
      // this.props.history.push('/dashboard');
      this.props.navigate("/dashboard");
    }).catch((err) => {
      if (err.response && err.response.data && err.response.data.errorMessage) {
        swal({
          text: err.response.data.errorMessage,
          icon: "error",
          type: "error"
        });
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <TextField
                  id="standard-basic"
                  type="text"
                  autoComplete="off"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                  placeholder="User Name / Email"
                  required
                  InputProps={{
                    style: { fontSize: 16, size: 50 },
                                 }} 
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <TextField
                  id="standard-basic"
                  type="password"
                  autoComplete="off"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  placeholder="Password"
                  required
                  InputProps={{
                    style: { fontSize: 16, size: 50 },
                                 }} 
                />
              </div>
              <Button
                className="login__submit"
                variant="contained"
                color="primary"
                size="small"
                onClick={this.login}
                style={{fontSize: "16px"}}
              >
                <span className="button__text">Log In</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </Button>
             {/* <button
                className="register__submit"
                component="button"
                onClick={() => {
                  this.props.navigate("/register");
                }}
              >
                <span className="button__text">Register</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button> */}
            </form>
            <div className="social-login">
              {/* Add your social login components here */}
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);