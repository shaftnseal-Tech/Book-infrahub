import React, { useState } from "react";
import "./signup.css";
import login_hero from "../../assets/login_hero.png";
import google_logo from "../../assets/google_logo.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputAdornment, IconButton } from '@mui/material';

const ResetPassword = () => {
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
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
                <Grid item xs={12} md={6} className="image-section-password">
                    <img src={login_hero} alt="Signup Hero" className="image-password" />
                </Grid>

                {/* Right Section - Form */}
                <Grid item xs={12} md={6} className="form-section">
                    <Box className="form-container">
                        <Grid className="forgotpass_set">
                            <Typography variant="h5" className="reset-heading">
                                Forgot Password
                            </Typography>
                            <Typography className="reset-heading2">
                                Please enter new password
                            </Typography>
                        </Grid>
                        <form className="form">
                            {/* New Password Field */}
                            <TextField
                                fullWidth
                                id="new-password"
                                margin="normal"
                                variant="outlined"
                                placeholder="New Password"
                                type={showNewPassword ? "text" : "password"}
                                className="form-field"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowNewPassword}
                                                edge="end"
                                            >
                                                {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            {/* Confirm Password Field */}
                            <TextField
                                fullWidth
                                id="confirm-password"
                                margin="normal"
                                variant="outlined"
                                placeholder="Confirm Password"
                                type={showConfirmPassword ? "text" : "password"}
                                className="form-field"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowConfirmPassword}
                                                edge="end"
                                            >
                                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            {/* Signup Button */}
                            <Button
                                fullWidth
                                variant="contained"
                                className="login-button"
                            >
                                Continue
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

export default ResetPassword;
