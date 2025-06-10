import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";

const Error = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 8 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box
            component="img"
            src="https://via.placeholder.com/400x300" // Replace with the actual image URL or import it
            alt="404 Error"
            sx={{ width: "100%", maxWidth: 400, margin: "0 auto" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "#333" }}>
            Oops! 404, Page Not Found
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              mt: 2,
            }}
          >
            Something went wrong. It looks like the page you requested could not
            be found. The link might be broken, or the page is removed.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href="/"
            >
              Go to Home
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Error;
