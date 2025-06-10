import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { cartData } from '../../constants/data';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { color } from "@mui/system";
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';


const Cart = () => {
  const [cart, setCart] = useState(cartData);

  const handleQuantityChange = (id, type) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQuantity =
          type === "increase"
            ? item.quantity + 1
            : item.quantity > 1
            ? item.quantity - 1
            : item.quantity;
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const calculateTotals = () => {
    const subTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const discount = 1000;
    const tax = 2500;
    const total = subTotal - discount + tax;
    return { subTotal, discount, tax, total };
  };

  const totals = calculateTotals();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>

      <Grid container spacing={2}>
        {/* Cart Table */}
        <Grid item xs={12} md={8}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Actions</TableCell>
                  <TableCell>Products</TableCell>
                  <TableCell >Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Sub-total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => (
                  <TableRow key={item.id}>
                 <TableCell>
                    <IconButton
                          sx={{ color: 'gray.400',  // Default color is gray
                                '&:hover': {
                                color: 'red',  // Change to red on hover
                                 },
                              }}
                                onClick={() => handleDelete(item.id)}
                                >
                                <HighlightOffIcon />
                      </IconButton>
                  </TableCell>


                    <TableCell>
                      <Box display="flex" alignItems="center" style={{fontSize: "18px"  ,  fontweight: "600"  }}>
                        <img
                          src={item.image}
                          alt={item.productName}
                          style={{ width: 50, marginRight: 10 }}
                        />
                        {item.productName}
                      </Box>
                    </TableCell>
                    <TableCell style={{ color: "#0712B7", fontSize: "18px" ,  fontweight: "600"}}
                    >₹{item.price.toLocaleString()}</TableCell>
                    <TableCell style={{ fontSize: "18px", fontWeight: "600" }}>
  <Box
    sx={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "3px",
      border: "1px solid var(--Gray-100, #E4E7E9)",
      background: "var(--Gray-00, #FFF)",
      padding: "2px 8px", // Adjust padding for spacing
    }}
  >
    <IconButton 
      onClick={() => handleQuantityChange(item.id, "decrease")}
    >
      <RemoveCircleOutlineIcon />
    </IconButton>
    <Typography
      sx={{
        mx: 1, // Add margin for spacing
        fontWeight: "500",
        fontSize: "16px",
      }}
    >
      {item.quantity}
    </Typography>
    <IconButton
      onClick={() => handleQuantityChange(item.id, "increase")}
    >
      <AddCircleOutlineIcon />
    </IconButton>
  </Box>
</TableCell>

                    <TableCell style={{color: "#0712B7", fontSize: "18px" ,  fontweight: "600"}}>
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </TableCell>
                    
                   </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box mt={2} display="flex" justifyContent="space-between" alignItems="center" >
             <Button variant="outlined"  style={{color: "#0712B7" , border:"2px solid #0712B7" }}><KeyboardBackspaceIcon /> Return to Shop </Button>
                 <Button variant="outlined"  style={{color: "#0712B7" , border:"2px solid #0712B7"}}>
                   Update Cart
                 </Button>
          </Box>

        </Grid>

        {/* Cart Totals */}
       {/* Cart Totals */}
       <Grid item xs={12} md={4}>
  <Paper elevation={3} sx={{ p: 2 }}>
    <Typography
      variant="h6"
      sx={{
        color: '#000',
        fontFamily: 'Inter',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '2.70px',
      }}
    >
      Cart Totals
    </Typography>
    <Box display="flex" justifyContent="space-between" mt={2}>
      <Typography
        sx={{
          color: '#000',
          textAlign: 'right',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '20px',
        }}
      >
        Sub-total:
      </Typography>
      <Typography
        sx={{
          color: '#000',
          textAlign: 'right',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '20px',
        }}
      >
        ₹{totals.subTotal.toLocaleString()}
      </Typography>
    </Box>
    <Box display="flex" justifyContent="space-between">
      <Typography
        sx={{
          color: '#000',
          textAlign: 'right',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '20px',
        }}
      >
        Shipping:
      </Typography>
      <Typography
        sx={{
          color: '#000',
          textAlign: 'right',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '20px',
        }}
      >
        Free
      </Typography>
    </Box>
    <Box display="flex" justifyContent="space-between">
      <Typography
        sx={{
          color: '#000',
          textAlign: 'right',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '20px',
        }}
      >
        Discount:
      </Typography>
      <Typography
        sx={{
          color: '#000',
          textAlign: 'right',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '20px',
        }}
      >
        -₹{totals.discount.toLocaleString()}
      </Typography>
    </Box>
    <Box display="flex" justifyContent="space-between">
      <Typography
        sx={{
          color: '#000',
          textAlign: 'right',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '20px',
        }}
      >
        Tax:
      </Typography>
      <Typography
        sx={{
          color: '#000',
          textAlign: 'right',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '20px',
        }}
      >
        ₹{totals.tax.toLocaleString()}
      </Typography>
    </Box>
    <Box display="flex" justifyContent="space-between" mt={2}>
      <Typography
        sx={{
          color: '#000',
          fontFamily: 'Inter',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '20px',
        }}
      >
        Total:
      </Typography>
      <Typography
        sx={{
          color: '#000',
          fontFamily: 'Inter',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '20px',
        }}
      >
        <strong>₹{totals.total.toLocaleString()}</strong>
      </Typography>
    </Box>
    <Button
      variant="contained"
      fullWidth
      color="primary"
      sx={{
        mt: 4,
        borderRadius: '8px',
        background: '#0712B7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '12px',
        padding: '6px 16px',
      }}
      style={{ backgroundColor: '#0712B7' }}
    >
      Proceed to Checkout
      <EastIcon />
    </Button>
  </Paper>

  {/* Trusted and Secure Section */}
  <Box
    sx={{
      mt: 2,
      textAlign: 'center',
      color: '#5F6C72',
      fontFamily: 'Inter',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width:"65%",
      // border: "2px solid red",
      marginLeft:"20%",
    }}
  >
    <VerifiedUserIcon style={{ color: '#5F6C72' }} />
    Trusted and Secure Payments, Easy Returns. 100% Genuine Products.
  </Box>

  {/* Coupon Code Section */}
  <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
    <Typography
      variant="h6"
      sx={{
        color: '#000',
        fontFamily: 'Inter',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '20px',
      }}
    >
      Coupon Code
    </Typography>
    <TextField placeholder="Enter coupon code" fullWidth sx={{ mt: 1 }} />
    <Button
      variant="contained"
      fullWidth
      sx={{ mt: 2 }}
      style={{ backgroundColor: '#0712B7' }}
    >
      Apply Coupon
    </Button>
  </Paper>
</Grid>


      </Grid>
    </Box>
  );
};

export default Cart;
