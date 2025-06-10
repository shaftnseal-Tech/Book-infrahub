import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import './footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box className="footer-container">
      {/* Main Footer Content */}
      <Box className="footer">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Intro Zuvve Section with  */}
          <Grid item xs={12} sm={2} className="footer-section intro" sx={{ marginLeft: '20px' }}>
            <Typography variant="h6">
              Bookie
            </Typography>
            <Typography variant="body2">
             Bookie is your one-stop solution for discovering and selling products. We offer an easy and secure platform for everyone.
            </Typography>
          </Grid>

          {/* Let Us Help You Section */}
          <Grid item xs={12} sm={2} className="footer-section">
            <Typography variant="h6">
              Let Us Help You
            </Typography>
            <Link href="#" className="footer-link">
              Your Account
            </Link>
            <Link href="#" className="footer-link">
              Returns Center
            </Link>
            <Link href="#" className="footer-link">
              Rules & Regulations
            </Link>
          </Grid>

          {/* Community Section */}
          <Grid item xs={12} sm={2} className="footer-section">
            <Typography variant="h6">
              Community
            </Typography>
            <Link href="#" className="footer-link">
              Become a seller
            </Link>
            <Link href="#" className="footer-link">
              Become a buyer
            </Link>
            <Link href="#" className="footer-link">
              FAQ
            </Link>
          </Grid>

          {/* Contact Info Section */}
          <Grid item xs={12} sm={2} className="footer-section">
            <Typography variant="h6" >
              Contact Info
            </Typography>
            <Typography variant="body2" className="footer-link" onClick={() => navigate("/AboutPage")}>
              About Us
            </Typography>
            <Typography variant="body2" className="footer-link">
              Address: 123 Zuvve St, Bengaluru, India
            </Typography>
            <Typography variant="body2" className="footer-link">
              +91 8880-522-522
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={2} className="footer-section">
            <Typography variant="h6">
              Quick Links
            </Typography>
            <Link href="#" className="footer-link">
              Privacy Policy
            </Link>
            <Link href="#" className="footer-link">
              Terms & Conditions
            </Link>
            <Link href="#" className="footer-link">
              Sitemap
            </Link>
          </Grid>
        </Grid>
      </Box>

      {/* Copyright Section */}
      <Box className="footer-copyright">
        <Typography>
          &copy; All Rights Reserved for Zuvve - 2024
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;