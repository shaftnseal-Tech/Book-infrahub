import React, { useContext, useState } from "react";
import "./signup.css";
import login_hero from "../../assets/login_hero.png";
import google_logo from "../../assets/google_logo.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { InputAdornment, IconButton } from "@mui/material";
import { authenticatelogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const loginValues = {
  phone: "",
  password: "",
};

const Login = () => {
  const [login, setLogin] = useState(loginValues);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await authenticatelogin(login);
      if (response && response.status === 200) {
        const { username, token } = response.data;

        // Store token in localStorage
        localStorage.setItem("authToken", token);

        // Set user account context
        setAccount(username);

        console.log("Login successful");
        navigate("/"); // Redirect to home page
      } else {
        setErrorMessage("Invalid login credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <Grid container className="signup-container">
      {/* Header Section */}
      <Grid item xs={12} className="header-section">
        <Typography variant="h4" className="header-title">
          Good to see you again! Let’s get <br />
          you Shopping...
        </Typography>
      </Grid>

      {/* Main Section */}
      <Grid container className="main-section">
        {/* Left Section - Image */}
        <Grid item xs={12} md={6} className="image-section">
          <img src={login_hero} alt="Signup Hero" className="image" />
        </Grid>

        {/* Right Section - Form */}
        <Grid item xs={12} md={6} className="form-section">
          <Box className="form-container">
            <Typography variant="h5" className="login-heading">
              Login
            </Typography>
            <form className="form" onSubmit={loginUser}>
              {/* Mobile Number Field */}
              <InputLabel shrink htmlFor="mobile" className="input-label">
                Mobile Number
              </InputLabel>
              <TextField
                fullWidth
                id="mobile"
                margin="normal"
                variant="outlined"
                placeholder="Enter Number"
                name="phone"
                onChange={handleLoginInputChange}
                className="form-field"
              />

              {/* Password Field */}
              <InputLabel shrink htmlFor="password" className="input-label">
                Password
              </InputLabel>
              <TextField
                fullWidth
                id="confirm-password"
                margin="normal"
                name="password"
                variant="outlined"
                placeholder="Enter Password"
                type={showPassword ? "text" : "password"}
                onChange={handleLoginInputChange}
                className="form-field"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Error Message */}
              {errorMessage && (
                <Typography
                  variant="body2"
                  color="error"
                  className="error-message"
                >
                  {errorMessage}
                </Typography>
              )}

              {/* Login Button */}
              <Button
                fullWidth
                variant="contained"
                className="login-button"
                type="submit"
              >
                Login
              </Button>

              {/* Forgot Password and Signup Link */}
              <Grid className="account-container">
                <Typography variant="body2" className="forgot-text">
                  Forgot Password?
                  <Link to="/ResetPassword" className="login-link">
                    Reset
                  </Link>
                </Typography>
                <Typography variant="body2" className="forgot-text">
                  Create Account?{" "}
                  <Link to="/Signup" className="signup-link">
                    Sign up here
                  </Link>
                </Typography>
              </Grid>

              {/* Continue with Google */}
              <Button
                fullWidth
                variant="outlined"
                className="google-button"
                startIcon={
                  <img
                    src={google_logo}
                    alt="Google Logo"
                    className="google-logo"
                  />
                }
              >
                Continue with Google
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
