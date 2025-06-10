import React, { useState } from "react";
import "./otpverify.css";
import login_hero from "../../assets/login_hero.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import { TextField, Stack, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { authenticateVerifyOtp } from "../../service/api";

const otpInitialValues = {
  otp: ["", "", "", ""],
  phone: "",
};

const Otpverify = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize state
  const [otpValues, setOtpValues] = useState(otpInitialValues.otp);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Phone number from location state
  const phone = location.state?.phone || "0000000000";

  // Handle OTP input change
  const handleOtpChange = (index, value) => {
    const updatedOtp = [...otpValues];
    updatedOtp[index] = value;
    setOtpValues(updatedOtp);
  };

  // Validate and verify OTP
  const verifyOtp = async () => {
    if (otpValues.some((otp) => otp.trim() === "")) {
      setError("Please enter the complete OTP.");
      return;
    }

    const otp = otpValues.join(""); // Combine OTP values into a single string
    setLoading(true);
    setError("");
    try {
      const response = await authenticateVerifyOtp({ phone, otp });
      if (response && response.status === 200) {
        console.log("OTP verified successfully");
        navigate("/password"); // Navigate to the next page after successful verification
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "OTP verification failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Grid container direction="column" alignItems="center" justifyContent="center" spacing={3}>
        {/* Centered Heading */}
        <Typography className="centered-heading" variant="h4" align="center">
          OTP Verification
        </Typography>
      </Grid>

      <Grid className="login-section" container justifyContent="center" alignItems="center" spacing={1}>
        {/* Left Image Section */}
        <Grid item xs={12} sm={6} className="image-section">
          <Box component="img" src={login_hero} alt="Login Hero" className="login-image" />
        </Grid>

        {/* Right Form Section */}
        <Grid item xs={12} sm={6} md={5} lg={4} className="form-section">
          {/* OTP Input Fields */}
          <Typography variant="h4" align="center" gutterBottom className="otp-verification-heading">
            Verify OTP
          </Typography>

          {/* Subtext */}
          <Typography variant="body2" align="center" className="subtext">
            Enter OTP code sent to {phone}
          </Typography>

          {/* Error Message */}
          {error && (
            <Typography variant="body2" color="error" align="center" className="error-message">
              {error}
            </Typography>
          )}

          {/* OTP Boxes */}
          <Stack direction="row" spacing={2} className="otp-input-container">
            {otpValues.map((value, index) => (
              <TextField
                key={index}
                variant="outlined"
                className="otp-input"
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value.slice(-1))}
                inputProps={{
                  maxLength: 1,
                }}
              />
            ))}
          </Stack>

          {/* Resend Code */}
          <Typography variant="body2" align="center" className="resend-code">
            Didn’t receive OTP code?
            <br />
            <span className="resend-link">Resend Code</span>
          </Typography>

          {/* Verify OTP Button */}
          <Button
            variant="contained"
            fullWidth
            className="verify-button"
            onClick={verifyOtp}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </Button>

          {/* Log In Link */}
          <Typography variant="body2" align="center" className="login-link">
            Already have an account? <span className="login-link-text">Log In</span>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Otpverify;
