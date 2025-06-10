import React, { useState } from "react";
import "./signup.css";
import login_hero from "../../assets/login_hero.png";
import google_logo from "../../assets/google_logo.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios"; // Import axios for API request

const Password = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState(""); // State to store phone number
  const [error, setError] = useState(null); // State for error messages
  const navigate = useNavigate(); // For navigation after successful password set

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make sure passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Call the API to set the password
      const response = await axios.post("http://localhost:8000/setpassword", {
        phone: phone,  // Pass the phone number here
        password: password,
      });
      
      if (response.status === 200) {
        console.log("Password set successfully");
        navigate("/login"); // Redirect to login after success
      }
    } catch (err) {
      console.error("Error setting password:", err);
      setError("Error setting password. Please try again.");
    }
  };

  return (
    <Grid container className="signup-container">
      {/* Header Section */}
      <Grid item xs={12} className="header-section">U
        <Typography variant="h4" className="header-title">
          Let us help you create an account! <br />
          It won't take long...
        </Typography>
      </Grid>

      {/* Main Section */}
      <Grid container className="main-section">
        {/* Left Section - Image */}
        <Grid item xs={12} md={6} className="image-section-password">
          <img src={login_hero} alt="Signup Hero" className="image-password" />
        </Grid>

        {/* Right Section - Form */}
        <Grid item xs={12} md={6} className="form-section">
          <Box className="form-container">
            <Typography variant="h5" className="reset-heading-password">
              Set Your Account Password
            </Typography>
            <form className="form" onSubmit={handleSubmit}>
              {/* Phone Number Field */}
              <InputLabel shrink htmlFor="phone" className="input-label">
                Phone Number
              </InputLabel>
              <TextField
                fullWidth
                id="phone"
                margin="normal"
                variant="outlined"
                placeholder="Enter Phone Number"
                className="form-field"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              {/* Password Field */}
              <InputLabel shrink htmlFor="password" className="input-label">
                Create Password
              </InputLabel>
              <TextField
                fullWidth
                id="password"
                margin="normal"
                variant="outlined"
                placeholder="Enter Password"
                type={showPassword ? "text" : "password"}
                className="form-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Confirm Password Field */}
              <InputLabel shrink htmlFor="confirm_password" className="input-label">
                Confirm Password
              </InputLabel>
              <TextField
                fullWidth
                id="confirm_password"
                margin="normal"
                variant="outlined"
                placeholder="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                className="form-field"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleToggleConfirmPasswordVisibility}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Error Message */}
              {error && <Typography variant="body2" className="error-text">{error}</Typography>}

              {/* Submit Button */}
              <Button
                fullWidth
                variant="contained"
                className="signup-button"
                type="submit"
              >
                Set Password
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

export default Password;
