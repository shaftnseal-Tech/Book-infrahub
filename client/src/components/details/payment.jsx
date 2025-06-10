import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import codImage from "../../assets/cod.png";
import upiImage from "../../assets/UPI.png";
import emiImage from "../../assets/EMI.png";
import NetbankingImage from "../../assets/Netbanking.png";
import DebitImage from "../../assets/Card.png";




const Payment = () => {
  const [paymentOption, setPaymentOption] = useState("");
  const [cartData, setCartData] = useState([
    {
      id: 1,
      productName: "Product 1",
      image: "/path/to/image1.jpg",
      quantity: 1,
      price: 500,
    },
    {
      id: 2,
      productName: "Product 2",
      image: "/path/to/image2.jpg",
      quantity: 2,
      price: 300,
    },
  ]);

  const handlePaymentChange = (event) => {
    setPaymentOption(event.target.value);
  };

  return (
    <Container
  maxWidth="lg"
  style={{
    marginTop: "6rem",
    marginBottom: "5rem",
    color:  "var(--Gray-900,rgb(22, 34, 46))",
    fontFamily: "Inter",
    fontSize: "19px",
    fontStyle: "normal",
    // fontWeight: 300,
    lineHeight: "20px",
  }}
>
      <Grid container spacing={4}>
        {/* Billing Information Section */}
        <Grid item xs={12} md={8}>
        <Typography variant="h5" gutterBottom>
  Billing Information
</Typography>
<Grid container spacing={2}>
      {/* User Name Section */}
      <Grid item xs={12}>
        <Typography variant="subtitle1" gutterBottom>
          User Name
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="First Name"
          variant="outlined"
          InputLabelProps={{
            style: { color: "#8a9093", fontSize: "14px" },
          }}
          InputProps={{
            style: { backgroundColor: "" },
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Last Name"
          variant="outlined"
          InputLabelProps={{
            style: { color: "#8a9093", fontSize: "14px " },
          }}
        />
      </Grid>

      {/* Address Section */}
      <Grid item xs={12}>
        <Typography variant="subtitle1" gutterBottom>
          Address
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          InputLabelProps={{
            style: { color: "#E4E7E9", fontSize: "14px" },
          }}
        />
      </Grid>

      {/* State, City, and Pin Code Section */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="subtitle1" gutterBottom>
            State
          </Typography>
          <FormControl fullWidth>
            <InputLabel style={{ color: "#E4E7E9", fontSize: "14px" }}>
              Select
            </InputLabel>
            <Select>
              <MenuItem value="state1">State 1</MenuItem>
              <MenuItem value="state2">State 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="subtitle1" gutterBottom>
            City
          </Typography>
          <FormControl fullWidth>
            <InputLabel style={{ color: "#E4E7E9", fontSize: "14px" }}>
              Select
            </InputLabel>
            <Select>
              <MenuItem value="city1">City 1</MenuItem>
              <MenuItem value="city2">City 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="subtitle1" gutterBottom>
            Pin Code
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            InputLabelProps={{
              style: { color: "#E4E7E9", fontSize: "14px" },
            }}
          />
        </Grid>
      </Grid>

      {/* Email and Phone Number Section */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="subtitle1" gutterBottom>
            Email
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            InputLabelProps={{
              style: { color: "#E4E7E9", fontSize: "14px" },
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <Typography variant="subtitle1" gutterBottom>
            Phone Number
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            InputLabelProps={{
              style: { color: "#E4E7E9", fontSize: "14px" },
            }}
          />
        </Grid>
      </Grid>
    </Grid>

           {/* Payment Options Section */}
           <Typography variant="h6" gutterBottom style={{ marginTop: "2rem" }}>
  Payment Option
</Typography>
<Grid container spacing={2 }>
  {[
    {
      value: "cod",
      imgSrc: codImage,
      title: "Cash on Delivery",
    },
    {
      value: "upi",
      imgSrc: upiImage,
      title: "UPI Payment",
    },
    {
      value: "netbanking",
      imgSrc: NetbankingImage,
      title: "Net Banking",
    },
    {
      value: "creditcard",
      imgSrc: DebitImage,
      title: "Debit/Credit Card",
    },
    {
      value: "emi",
      imgSrc: emiImage,
      title: "EMI (Easy Installments)",
    },
  ].map((option) => (
    <Grid item xs={12} sm={6} md={2} key={option.value}>
      <Card>
        <CardContent sx={{ textAlign: "center" }}
        style={{ width: "90%", height: "100%", marginBottom: "10px" }}
        >
          <img
            src={option.imgSrc}
            alt={`${option.title} Icon`}
            style={{ width: "90px", height: "70px", marginBottom: "10px" }}
          />
          <Typography style={{ fontSize: "13px", fontWeight: "bold" }}>
            {option.title}
          </Typography>
          <FormControlLabel
            value={option.value}
            control={<Radio />}
            label=""
            style={{ marginTop: "10px" , marginLeft:"16px" }}
            onChange={handlePaymentChange}
            checked={paymentOption === option.value}
          />
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

{/* Credit/Debit Card Form */}
{paymentOption === "creditcard" && (
  <Grid container spacing={2} style={{ marginTop: "1rem" }}>
    <Grid item xs={12}>
      <TextField fullWidth label="Name on Card" variant="outlined" />
    </Grid>
    <Grid item xs={12}>
      <TextField fullWidth label="Card Number" variant="outlined" />
    </Grid>
    <Grid item xs={6}>
      <TextField fullWidth label="Expire Date (MM/YY)" variant="outlined" />
    </Grid>
    <Grid item xs={6}>
      <TextField fullWidth label="CVV" variant="outlined" />
    </Grid>
  </Grid>
)}

{/* UPI Form */}
{paymentOption === "upi" && (
  <Grid container spacing={2} style={{ marginTop: "1rem" }}>
    <Grid item xs={12}>
      <TextField fullWidth label="UPI ID (e.g., example@upi)" variant="outlined" />
    </Grid>
    <Grid item xs={12}>
      <FormControl fullWidth>
        <InputLabel>Select UPI App</InputLabel>
        <Select>
          <MenuItem value="phonepe">PhonePe</MenuItem>
          <MenuItem value="googlepay">Google Pay</MenuItem>
          <MenuItem value="paytm">Paytm</MenuItem>
          <MenuItem value="paypal">PayPal</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  </Grid>
)}

{/* Net Banking Form */}
{paymentOption === "netbanking" && (
  <Grid container spacing={2} style={{ marginTop: "1rem" }}>
    <Grid item xs={12}>
      <FormControl fullWidth>
        <InputLabel>Select Bank</InputLabel>
        <Select>
          <MenuItem value="sbi">State Bank of India</MenuItem>
          <MenuItem value="hdfc">HDFC Bank</MenuItem>
          <MenuItem value="icici">ICICI Bank</MenuItem>
          <MenuItem value="axis">Axis Bank</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <TextField fullWidth label="Account Holder Name" variant="outlined" />
    </Grid>
    <Grid item xs={12}>
      <TextField fullWidth label="Account Number" variant="outlined" />
    </Grid>
    <Grid item xs={12}>
      <TextField fullWidth label="IFSC Code" variant="outlined" />
    </Grid>
  </Grid>
)}



          {/* Additional Information */}
          <Typography variant="h6" gutterBottom style={{ marginTop: "2rem" }}>
            Additional Information
          </Typography>
          <TextField
            fullWidth
            label="Order Notes (Optional)"
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>


       {/* Order Summary Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom>
            Order Summary
          </Typography>
          <Card>
            <CardContent>
              {/* Mapping through the cart data */}
              {cartData.map((item) => (
                <Grid container spacing={2} key={item.id}>
                  <Grid item xs={4}>
                    <img src={item.image} alt="Product" style={{ width: "100%" }} />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="subtitle1">{item.productName}</Typography>
                    <Typography variant="body2" style={{ color: "#0712B7" }}>
                      x {item.quantity} ₹{item.price}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
              
              {/* Static summary */}
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" style={{ textAlign: "left" }}>
                    Sub-total:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" style={{ textAlign: "right" }}>
                    ₹3,00,000
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" style={{ textAlign: "left" }}>
                    Shipping:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" style={{ textAlign: "right" }}>
                    Free
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" style={{ textAlign: "left" }}>
                    Discount:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" style={{ textAlign: "right" }}>
                    ₹1,000
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" style={{ textAlign: "left" }}>
                    Tax:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" style={{ textAlign: "right" }}>
                    ₹2,500
                  </Typography>
                </Grid>
              </Grid>

              <Typography variant="h6" style={{ marginTop: "1rem", fontWeight: "bold" }}>
                Total: ₹3,03,500
              </Typography>

              <Box sx={{ marginTop: "24px", textAlign: "center" }}>
                <Button variant="contained">Proceed to Payment</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      
    </Container>
  );
};

export default Payment;
