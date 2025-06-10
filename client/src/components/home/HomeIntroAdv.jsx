import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Box,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { HomeIntroAdvDATA } from "../../constants/data";

const HomeIntroAdv = () => {
  return (
    <Grid container justifyContent="center" sx={{ padding: "20px" }}>
      {/* Cards Container */}
      <Grid container spacing={2} alignItems="stretch">
        {/* First Card */}
        <Grid item xs={12} sm={12} md={6}>
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#F2F4F5",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              borderRadius: "8px",
              "@media (max-width:600px)": {
                padding: "10px",
              },
            }}
          >
            <CardContent
              sx={{
                flex: 1,
                p: { xs: 2, md: 4 },
                "@media (max-width:600px)": {
                  textAlign: "left",
                },
              }}
            >
              <Box
                sx={{
                  width: "124px",
                  height: "32px",
                  backgroundColor: "#FFCC00",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  marginBottom: "10px",
                  "@media (max-width:600px)": {
                    margin: "0 0 10px 0",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    color: "#FFF",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  INTRODUCING
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "24px", md: "32px" },
                  fontWeight: "600",
                  lineHeight: "40px",
                  marginBottom: "16px",
                }}
              >
                {HomeIntroAdvDATA[0]?.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  color: "text.secondary",
                  marginBottom: "16px",
                }}
              >
                {HomeIntroAdvDATA[0]?.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0712B7",
                  color: "#fff",
                  height: 40,
                  borderRadius: "16px",
                  "&:hover": { backgroundColor: "#050F8A" },
                  "@media (max-width:600px)": {
                    width: "100%",
                  },
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Shop Now
              </Button>
            </CardContent>
            <CardMedia
              component="img"
              image={HomeIntroAdvDATA[0]?.image}
              alt={HomeIntroAdvDATA[0]?.name}
              sx={{
                width: { xs: "100%", md: 275 },
                height: { xs: 200, md: 296 },
                objectFit: "cover",
                "@media (max-width:600px)": {
                  height: "150px",
                },
              }}
            />
          </Card>
        </Grid>
        {/* Second Card */}
        <Grid item xs={12} sm={12} md={6}>
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#191C1F",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              borderRadius: "8px",
              "@media (max-width:600px)": {
                padding: "10px",
              },
            }}
          >
            <CardContent
              sx={{
                flex: 1,
                p: { xs: 2, md: 4 },
                "@media (max-width:600px)": {
                  textAlign: "left",
                },
              }}
            >
              <Box
                sx={{
                  width: "124px",
                  height: "32px",
                  backgroundColor: "#FFCC00",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  marginBottom: "10px",
                  "@media (max-width:600px)": {
                    margin: "0 0 10px 0",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    color: "#FFF",
                    fontSize: "14px",
                    textAlign:'center',
                  }}
                >
                  INTRODUCING
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "24px", md: "32px" },
                  fontWeight: "600",
                  color: "#fff",
                  lineHeight: "40px",
                  marginBottom: "16px",
                }}
              >
                {HomeIntroAdvDATA[1]?.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  color: "#ADB7BC",
                  marginBottom: "16px",
                }}
              >
                {HomeIntroAdvDATA[1]?.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0712B7",
                  color: "#fff",
                  height: 40,
                  textTransform: "none",
                  borderRadius: "16px",
                  "&:hover": { backgroundColor: "#050F8A" },
                  "@media (max-width:600px)": {
                    width: "100%",
                  },
                }}
                endIcon={<ArrowForwardIcon />}
              >
                SHOP NOW
              </Button>
            </CardContent>
            <CardMedia
              component="img"
              image={HomeIntroAdvDATA[1]?.image}
              alt={HomeIntroAdvDATA[1]?.name}
              sx={{
                width: { xs: "100%", md: 337 },
                height: { xs: 200, md: 206 },
                objectFit: "cover",
                "@media (max-width:600px)": {
                  height: "150px",
                  fontSize: "14px",
                },
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeIntroAdv;
