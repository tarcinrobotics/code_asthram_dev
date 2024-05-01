import React, { useState } from "react";
import swal from "sweetalert";
import { Button, TextField, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import PasswordStrengthBar from 'react-password-strength-bar';
import './Register.css';


const Register = () => {
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const [state, setState] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });

  const [passwordStrength, setPasswordStrength] = useState(0);

  const [registrations, setRegistrations] = useState([]);
// Function to calculate password strength (you can customize this logic)
const calculatePasswordStrength = (password) => {
 
 // Your logic to calculate password strength
 // For simplicity, Let's assume the strength is based on the password length

  const lengthStrength = Math.min(password.length / 8, 1);
  return lengthStrength;
}

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  
    // Calculate and update password strength
    if (name === 'password') {
      // Use your own logic to calculate password strength (you can use a separate function or library)
      const strength = calculatePasswordStrength(value);
      setPasswordStrength(strength);
    }
  };

  const register = () => {
    axios
      .post("http://localhost:2000/register", {
        username: state.username,
        password: state.password,
      })
      .then((res) => {
        swal({
          text: res.data.title,
          icon: "success",
          type: "success",
        });
        setRegistrations([...registrations, { username: state.username, password: state.password }]);
        setState({
          username: "",
          password: "",
          confirm_password: "",
        });
      })
        .catch((err) => {
        swal({
          text: err.response.data.errorMessage,
          icon: "error",
          type: "error",
        });
      });
  };

    return (
      <div className="register-main"
      >
        
        <div>
          <h2 style={{ fontWeight:'bolder'  }}>Register</h2>
        <div>
          <TextField
            id="standard-basic"
            type="text"
            autoComplete="off"
            name="username"
            value={state.username}
            onChange={onChange}
            placeholder="User Name"
            required
            InputProps={{
              style: { fontSize: 16, size: 50 },
            }}
          />
          </div>
          <br /><br />
          <div>
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="password"
            value={state.password}
            onChange={onChange}
            placeholder="Password"
            required
            InputProps={{
              style: { fontSize: 16, size: 50 },
            }}
          />
          <br /><br />
          <div style={{ width: '200px' }}>
            <PasswordStrengthBar password={state.password} />
          </div>
          </div>
          <div>
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="confirm_password"
            value={state.confirm_password}
            onChange={onChange}
            placeholder="Confirm Password"
            required
            InputProps={{
              style: { fontSize: 16, size: 50 },
            }}
/>

          <br /><br />
          </div>
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={state.username === '' || state.password === '' || state.password !== state.confirm_password}
            onClick={register}
            style={{fontSize: '15px'}}
          >
            Register
          </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link
            // href="/"
            component="button"
            style={{ fontFamily: "inherit", fontSize: "16px" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Login
          </Link>
          <br/><br />
          </div>

         <div className="registered-users" >
          <div>
          <h3>Registered Users</h3>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell 
                  style={{fontSize:"16px"}}
                  >Username</TableCell>
                  <TableCell
                  style={{fontSize:"16px"}}
                  >Password</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {registrations.map((user, index) => (
                  <TableRow key={index}>
                  <TableCell
                  style={{fontSize:"13px"}}
                  >{user.username}</TableCell>
                  <TableCell
                  style={{fontSize:"13px"}}
                  >{user.password}</TableCell>
                  </TableRow>                  
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>
        </div>
      </div>
    );
  }

export default Register;
