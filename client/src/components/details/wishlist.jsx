import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { wishlistData } from "../../constants/data"; // Assuming data.jsx exports wishlistData
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const StyledTableCell = ({ children, ...props }) => (
  <TableCell sx={{ fontWeight: "bold", textAlign: "left" }} {...props}>
    {children}
  </TableCell>
);

const StyledButton = ({ children, stock, ...props }) => (
  <Button
    {...props}
    disabled={stock !== "IN STOCK"}
    sx={{
      backgroundColor: stock === "IN STOCK" ? "#0712B7" : "#ccc",
      color: "white",
      "&:hover": { backgroundColor: stock === "IN STOCK" ? "#0712B7" : "#ccc" },
    }}
  >
    {children}
  </Button>
);

const WishlistTable = () => {
  const [wishlist, setWishlist] = useState(wishlistData);

  const handleCancel = (id) => {
    // Filter out the product with the specific id
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
  };

  return (
    <Box sx={{ p: 2 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Products</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
              <StyledTableCell>Stock Status</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {wishlist.map((item) => (
              <TableRow key={item.id}>
                {/* Display Image and Product Name with Description Side-by-Side */}
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                    <img
                      src={item.image}
                      alt={item.productName}
                      style={{
                        width: "80px",
                        height: "80px",
                        marginRight: "16px",
                        marginLeft: "16px",
                      }}
                    />
                    <Typography
                      sx={{
                        width: "75%", // Constrained width for responsiveness
                        overflow: "hidden", // Hide any overflow content
                        textOverflow: "ellipsis", // Add ellipsis for overflowed text
                        whiteSpace: "normal", // Allow text to wrap to the next line
                        lineHeight: "1.4", // Adjust line height for better readability
                      }}
                    >
                      {item.productName}
                    </Typography>
                  </Box>
                </TableCell>


                {/* Display Price */}
                <TableCell>
                  <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                    <Typography
                      sx={{
                        textDecoration: "line-through",
                        color: "#888",
                        marginRight: "10px", // Adding some space between prices
                      }}
                    >
                      ₹{item.originalPrice.toLocaleString()}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#0712B7",
                        fontWeight: "bold",
                        display: "inline-block",
                      }}
                    >
                      ₹{item.price.toLocaleString()}
                    </Typography>
                  </Box>
                </TableCell>


                {/* Display Stock Status */}
                <TableCell
                  sx={{
                    color: item.stockStatus === "IN STOCK" ? "green" : "red",
                  }}
                >
                  {item.stockStatus}
                </TableCell>

                {/* Display Actions */}
                <TableCell>
                  <StyledButton variant="contained" stock={item.stockStatus}>
                    Add to Cart
                    <ShoppingCartIcon style={{ marginLeft: "8px" }} />
                  </StyledButton>
                  <Button
                    variant="text"
                    color="#929FA5"
                    onClick={() => handleCancel(item.id)}
                    sx={{ marginLeft: "10px" }}
                  >
                    <HighlightOffIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default WishlistTable;
