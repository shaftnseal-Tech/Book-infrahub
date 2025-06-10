import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { CategoryData } from "../../constants/data";

const ProductGrid = () => {
  // Create a repeated list of products
  const repeatedProducts = Array.from({ length: 2 }).flatMap(() => CategoryData.products);

  return (
    <Grid 
      container 
      spacing={4} 
      sx={{
        // Ensures all products are displayed without scrolling
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
                bgcolor: "#f5f5f5", // Background color for better contrast
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
  );
};

export default ProductGrid;
