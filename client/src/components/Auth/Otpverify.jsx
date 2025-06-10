import React, { useState } from "react";
import "./otpverify.css";
import login_hero from "../../assets/login_hero.png";
import { Box, Grid, Typography, TextField, Stack, Button } from "@mui/material";
import google_logo from "../../assets/google_logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { authenticateVerifyOtp } from "../../service/api";

const otpInitialValues = {
  otp: ["", "", "", ""],
};

const Otpverify = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [otpValues, setOtpValues] = useState(otpInitialValues.otp);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const phone = location.state?.phone || "0000000000";

  const handleOtpChange = (index, value) => {
    const updatedOtp = [...otpValues];
    updatedOtp[index] = value.slice(-1); // Restricts input to 1 digit
    setOtpValues(updatedOtp);
  };

  const verifyOtp = async () => {
    if (otpValues.some((otp) => otp.trim() === "")) {
      setError("Please enter the complete OTP.");
      return;
    }

    const otp = otpValues.join("");
    setLoading(true);
    setError("");
    try {
      const response = await authenticateVerifyOtp({ phone, otp });
      if (response?.status === 200) {
        navigate("/password");
      } else {
        setError("Invalid OTP. Please try again later.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "OTP verification failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Grid container direction="column" alignItems="center" spacing={3}>
        <Typography variant="h4" align="center" className="centered-heading">
          Let us help you create an account!
          <br />
          It won't take long...
        </Typography>
      </Grid>

      <Grid container className="login-section" justifyContent="center">
        <Grid item xs={12} sm={6} className="image-section">
          <Box component="img" src={login_hero} alt="Login Hero" className="login-image" />
        </Grid>

        <Grid item xs={12} sm={6} md={5} lg={4} className="form-section">
          <Typography variant="h4" align="center" gutterBottom>
            OTP Verification
          </Typography>
          <Typography variant="body2" align="center">
            Enter OTP code sent to +{phone}
          </Typography>
          <Stack direction="row" spacing={2} className="otp-input-container">
            {otpValues.map((value, index) => (
              <TextField
                key={index}
                variant="outlined"
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                inputProps={{ maxLength: 1 }}
                className="otp-input"
              />
            ))}
          </Stack>
          <Typography variant="body2" align="center" className="resend-code">
            Didn’t receive OTP code? <br />
            <span className="resend-link">Resend Code</span>
          </Typography>
          <Button
            variant="contained"
            className="signup-button"
            onClick={verifyOtp}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Next"}
          </Button>
          <Typography variant="body2" align="center">
            Already have an account?{" "}
            <a href="/login" className="login-link-text">
              Log In
            </a>
          </Typography>
          <Button variant="outlined" fullWidth className="google-login-button">
            <Box component="img" src={google_logo} alt="Google Logo" className="google-logo" />
            <Box component="span" className="google-text">
              Continue with Google
            </Box>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Otpverify;
