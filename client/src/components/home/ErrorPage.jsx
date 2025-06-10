import React from "react";
import "./ErrorPage.css"
import opps_image from "../../assets/Oops_404_error.png";

import {
  Box,
  Typography,
  Link,
  Breadcrumbs,
  Stack,
  Button,
} from "@mui/material";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Breadcrumb clicked!");
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      <HomeIcon sx={{ mr: 0.6 }} fontSize="small" />
      Home
    </Link>,
    <Typography key="1" className="product-breadcrumb-particular-page">
      Error Page
    </Typography>,
  ];

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <Grid>
      <Box>
        <Stack spacing={2} className="product-breadcrumb">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        <Grid sx={{
          marginTop: "2rem", marginBottom: "15rem"
        }}>
          <Grid className="error_section">
            <Grid container justifyContent="center" alignItems="center">
              <Box
                component="img"
                src={opps_image}
                alt="Centered Image"
                sx={{
                  width: "463px",
                  height: "419px",
                }}
              />
            </Grid>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "var(--Gray-900, #191C1F)",
                  textAlign: "center",
                  fontFamily: '"Public Sans", sans-serif',
                  fontSize: "36px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "44px",
                }}
              >
                404, Page Not Found
              </Typography>
            </Box>
            <Grid
              container
              item
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: "16px" }}
            >
              <Typography
                sx={{
                  width: "536px",
                  color: "var(--Gray-700, #475156)",
                  textAlign: "center",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Something went wrong. It looks like your request could not be
                found. It seems the link is broken or the page has been removed.
              </Typography>
            </Grid>

            <Grid
              container
              item
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: "16px", marginBottom: "16px" }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleGoBack}
                sx={{
                  marginLeft: "16px",
                  padding: "5px 22px",
                  background: "#0712B7",
                  width: "170px",
                  borderRadius: "14px",
                  gap: "8px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  marginRight="2"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M17.375 10H3.625"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.25 4.375L3.625 10L9.25 15.625"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                GO BACK
              </Button>
              <Button
                variant="outlined"
                onClick={handleGoToHome}
                sx={{
                  width: "140px",
                  marginLeft: "16px",
                  borderColor: "#0712B7",
                  color: "#0712B7",
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "12px",
                  letterSpacing: "0.168px",
                  padding: "10px 15px",
                  gap: "8px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M12.375 16.25V12.5C12.375 12.3343 12.3092 12.1753 12.1919 12.0581C12.0747 11.9409 11.9158 11.875 11.75 11.875H9.25C9.08424 11.875 8.92527 11.9409 8.80806 12.0581C8.69085 12.1753 8.625 12.3343 8.625 12.5V16.25C8.625 16.4158 8.55915 16.5747 8.44194 16.692C8.32473 16.8092 8.16576 16.875 8 16.875H4.25C4.08424 16.875 3.92527 16.8092 3.80806 16.692C3.69085 16.5747 3.625 16.4158 3.625 16.25V9.02345C3.6264 8.93696 3.64509 8.85162 3.67998 8.77245C3.71486 8.69329 3.76523 8.62191 3.82812 8.56252L10.0781 2.88283C10.1933 2.77742 10.3438 2.71896 10.5 2.71896C10.6562 2.71896 10.8067 2.77742 10.9219 2.88283L17.1719 8.56252C17.2348 8.62191 17.2851 8.69329 17.32 8.77245C17.3549 8.85162 17.3736 8.93696 17.375 9.02345V16.25C17.375 16.4158 17.3092 16.5747 17.1919 16.692C17.0747 16.8092 16.9158 16.875 16.75 16.875H13C12.8342 16.875 12.6753 16.8092 12.5581 16.692C12.4408 16.5747 12.375 16.4158 12.375 16.25Z"
                    stroke="#0712B7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                GO TO HOME
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default ErrorPage;
