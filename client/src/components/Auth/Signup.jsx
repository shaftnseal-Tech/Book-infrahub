import React, { useState } from "react";
import "./signup.css"; 
import login_hero from "../../assets/login_hero.png";
import google_logo from "../../assets/google_logo.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from '@mui/material/InputLabel';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { authenticateSignup } from "../../service/api";

const signupInitialValues = {
  username: '',
  phone: '',
};

const Signup = () => {
  const navigate = useNavigate()
  const [signup, setSignup] = useState(signupInitialValues);
  const handleSignupInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    const response = await authenticateSignup(signup);
    if (response && response.status === 201) {
        console.log('check the otp');
        // Passing phone number as state to OTP verification page
        navigate('/otpverify', { state: { phone: signup.phone } });
    } else {
        alert('Signup failed. Please try again.');
        console.log(response);
    }
};

  return (
    <Grid container className="signup-container">
      {/* Header Section */}
      <Grid item xs={12} className="header-section">
        <Typography variant="h4" className="header-title">
          Let us help you create an account! <br />
          It won't take long...
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
            <form className="form">
              {/* Username Field */}
              <InputLabel shrink htmlFor="username" className="input-label">
                User Name
              </InputLabel>
              <TextField
                fullWidth
                name="username"
                margin="normal"
                variant="outlined"
                placeholder="Enter Name"
                className="form-field"
                onChange={handleSignupInputChange}
              />

              {/* Mobile Number Field */}
              <InputLabel shrink htmlFor="mobile-number" className="input-label">
                Mobile Number
              </InputLabel>
              <TextField
                fullWidth
                name="phone"
                margin="normal"
                variant="outlined"
                placeholder="Enter Number"
                className="form-field"
                onChange={handleSignupInputChange}
              />

              {/* Terms and Conditions */}
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label={
                  <Typography variant="body2" className="checktick">
                    By creating an account, you agree to our
                    <Link to="/termsofuse" className="terms-of-use-link">
                    Terms of use</Link> and  <br /> <Link to="/PrivacyPolicy" className="terms-of-use-link">
                   Privacy Policy
                  </Link>
                  </Typography>
                }
                className="terms-checkbox"
              />

              {/* Signup Button */}
              <Button
                fullWidth
                variant="contained"
                className="signup-button"
                onClick={signupUser}
              >
                    Sign Up
                {/* <Link to="/Otpverify" >
            
                </Link> */}
                
              </Button>

              {/* Already Have an Account */}
              <Typography variant="body2" className="login-text">
                Already have an account?
                <Link to="/login" className="login-link">
                  Log in
                </Link>
              </Typography>

              {/* Continue with Google */}
              <Button
                fullWidth
                variant="outlined"
                className="google-button"
                startIcon={<img src={google_logo} alt="Google Logo" className="google-logo" />}
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

export default Signup;
