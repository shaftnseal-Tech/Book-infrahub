import React from "react";
import { Grid, Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { CategoryData } from "../../constants/data";
import Sidebar from "./Sidebar";

const Category = () => {
  // Create a repeated list of products
  const repeatedProducts = Array.from({ length: 4 }).flatMap(() => CategoryData.products);

  return (
    <Box display="flex" height="100%" overflow="hidden">
      {/* Sidebar */}
      <Box
        sx={{
          width: { xs: "100%", sm: "300px" },
          position: "fixed",
          overflowY: "auto",
          height: "100vh", // Ensures sidebar takes the full height
          bgcolor: "#f5f5f5",
        }}
      >
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          marginLeft: { sm: "300px" },
         
          p: 2,
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            margin: 0,
            width: "100%", // Grid takes full width of the parent
          }}
        >
          {repeatedProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={`${product.id}-${index}`}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-between",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
                  borderRadius: "8px", // Rounded corners
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    height: "200px", // Consistent image height
                    objectFit: "contain",
                    bgcolor: "#ffff", // Background color for better contrast
                  }}
                />
                <CardContent sx={{ padding: 2 }}>
                  <Typography variant="h6" noWrap>
                    {product.name}
                  </Typography>
                  <Typography color="textSecondary" sx={{ mb: 1 }}>
                    {product.price}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Category;
