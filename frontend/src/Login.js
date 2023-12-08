import React, { Component } from "react";
import swal from "sweetalert";
import { Button, TextField, Link } from "@material-ui/core";
import { withRouter } from "./utils";
import axios from "axios";
import mainLogo from "./media/code_asthram.png";
import tarproduct from "./media/codeasthramproduct.png";
import eve from "./media/eve.gif";
import quote from "./media/caption.png";
import copy from "./media/copyright.png";
import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showPassword: false,
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  login = () => {
    axios.post('http://localhost:2000/login', {
  username: this.state.username,
  password: this.state.password,
})
  .then(response => {
    // Handle the successful response from the server
    console.log('Login successful:', response.data);

    // Assuming the server sends a token, you might want to store it in local storage
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user_id', response.data.id);

    // Redirect the user to the dashboard or do other actions upon successful login
    this.props.navigate("/dashboard");
  })
  .catch(error => {
    // Handle errors from the server or network issues
    console.error('Login error:', error);

    // Display an error message to the user
    if (error.response && error.response.data && error.response.data.errorMessage) {
      swal({
        text: error.response.data.errorMessage,
        icon: "error",
        type: "error"
      });
    }
  });
}

  
  render() {
    return (

      
    <div className="container" >
      <div className="screen" style={{borderRadius: '20px'}}>
        <div className="screen__content">
          <img src={mainLogo} style={{ height: "50px", width: "200px", position: "relative", top: "120px", left: "15px" }} alt="Logo" />
          <form className="login">
            <div className="login__field">
            <FaUserAlt className="login__icon" style={{ fontSize: '24px' }} />
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
                  style: { fontSize: 16, size: 50, left: '28px' },
                }}
              />
            </div>
            <div className="login__field">
            <FaLock className="login__icon" style={{ fontSize: '24px' }} />
              <TextField
                id="standard-basic"
                type={this.state.showPassword ? 'text' : 'password'}
                autoComplete="off"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                placeholder="Password"
                required
                InputProps={{
                  style: { fontSize: 16, size: 50, left: '28px' },
                  endAdornment: (
                    <span onClick={this.togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                      {this.state.showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  ),
                }}
              />
            </div>
            <Button
              className="login__submit"
              variant="contained"
              
              size="small"
              onClick={this.login}
              style={{ fontSize: "16px", fontWeight: 'bolder', Color: 'black' }}
            >
              <span className="button__text">Log In</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </Button>
           {/*} <button
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
      <div className="rightbody" style={{display: 'flex',height: '600px', width: '850px', position: 'absolute', left: '400px'}}>
        <div className="tarcin-product" style={{display: 'flex', position:'absolute', right:'0', top: '10%'}}> 
        <img src={tarproduct} style={{height: '400px', width: '800px'}}/>
        </div>
        <div className="tarcin-quote" style={{display: 'flex', position:'absolute', right:'5%', top: '30%'}} >
        <img src={quote} style={{height: '300px', width:'700px'}}/>
        </div>
    
        <div className="eva-gif" style={{position:'absolute', display:'flex' , right:'0'}}>
            <img src={eve} style={{height: '150px', width: '150px'}}/>
        </div>
        
        <footer style={{position:'absolute', bottom:'20%', left: '30%', display: 'flex'}}>
          <img src={copy} style={{height: '150px', width:'350px'}}/>
        </footer>
  
 
      </div>
</div>
    );
  }
}

export default withRouter(Login);