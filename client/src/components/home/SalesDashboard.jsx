import React from 'react';
import { Grid, Typography, Card, CardContent, Paper } from '@mui/material';
import './SalesDashborad.css';
import Usdolar from '../../constants/assets/US_Dollar.png';
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Bar } from "react-chartjs-2";
import { People} from "@mui/icons-material";
import "chart.js/auto";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const noofsales = [
  { sales_price: 34000, month: 'January Month Sale' },
];

const nosalesdata = [
  { title: "Laptops", price: "34,000.00", iconColor: "#0CEEFD" },
  { title: "Gaming", price: "34,000.00", iconColor: "#8EF50A" },
  { title: "Desktops", price: "34,000.00", iconColor: "#0CEEFD" },
  { title: "Workstati", price: "34,000.00", iconColor: "#8EF50A" },
  { title: "Servers", price: "34,000.00", iconColor: "#0CEEFD" },
  { title: "Keyboards", price: "34,000.00", iconColor: "#8EF50A" },
  { title: "Hard disk", price: "34,000.00", iconColor: "#0CEEFD" },
  { title: "Mouse", price: "34,000.00", iconColor: "#8EF50A" },
  { title: "Storage", price: "34,000.00", iconColor: "#8EF50A" },
];

const MultiColorCircularProgress = ({ size = 200, thickness = 26, values = [33.33, 33.33, 33.33], colors = ["red", "green", "blue"] }) => {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;

  // Calculate the strokeDashoffset for each color segment
  const offset1 = circumference - (values[0] / 100) * circumference;
  const offset2 = offset1 - (values[1] / 100) * circumference;
  const offset3 = offset2 - (values[2] / 100) * circumference;

  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      {/* Background circle */}
      <circle cx="100" cy="100" r={radius} stroke="#e0e0e0" strokeWidth={thickness} fill="none" />

      {/* First Color Segment */}
      <circle cx="100" cy="100" r={radius} stroke={colors[0]} strokeWidth={thickness} fill="none" strokeDasharray={circumference} strokeDashoffset={0} transform="rotate(-90 100 100)" />

      {/* Second Color Segment */}
      <circle cx="100" cy="100" r={radius} stroke={colors[1]} strokeWidth={thickness} fill="none" strokeDasharray={circumference} strokeDashoffset={offset1} transform="rotate(-90 100 100)" />

      {/* Third Color Segment */}
      <circle cx="100" cy="100" r={radius} stroke={colors[2]} strokeWidth={thickness} fill="none" strokeDasharray={circumference} strokeDashoffset={offset2} transform="rotate(-90 100 100)" />
    </svg>
  );
};


const SalesDashboard = () => {
  // Data for the bar chart
  const barData = {
    labels: ["Laptops", "Desktops", "Processor", "Storage", "Accessories"],
    datasets: [
      {
        label: "Sales",
        data: [100, 200, 400, 600, 800],
        backgroundColor: "#0712B7",
        borderRadius: 5
      },
    ],
  };

  // Bar chart options
  const barOptions = {
    indexAxis: "y", // Makes the bars horizontal
    scales: {
      x: {
        min: 100,
        max: 800,
        ticks: { stepSize: 100, color: "#333" },
        grid: { display: true, color: "#ddd" },
      },
      y: {
        ticks: { color: "#333" },
        grid: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <Grid container spacing={4} className="dashboard-container">
      {/* Left Grid */}
      <Grid item xs={12} sm={6} className="sales-overview-container">
        <Typography variant="h6" className="section-title">Sales Overview</Typography>

        <Grid container spacing={3} alignItems="center">
          {/* Circle Chart and Number of Sales */}
          <Grid item xs={6} className="circle-bar-container">
            <MultiColorCircularProgress size={200} thickness={30} values={[33.33, 33.33, 33.33]} colors={["red", "green", "blue"]} />
          </Grid>

          {/* Sales Info */}
          {noofsales.map((sale, index) => (
            <Grid item xs={6} className="sales-info" key={index}>
              <Grid container>
                <Grid item xs={6} className="image-container">
                  <img src={Usdolar} alt="Sales" style={{ width: '50%', height: 'auto', borderRadius: '8px' }} />
                </Grid>
                <Grid item xs={6} className="sales-info-text">
                  <Typography variant="body2">Number of Sales</Typography>
                  <Typography variant="h6">${sale.sales_price.toLocaleString()}</Typography>
                  <Typography>{sale.month}</Typography>
                </Grid>
              </Grid>
              <hr />
              {/* Product Data Grid */}
              <Grid container spacing={2}>
                {nosalesdata.map((item, index) => (
                  <Grid item xs={12} sm={4} key={index} >
                    {/* <FiberManualRecordIcon style={{ marginRight: 8, fontSize: '14px',color: item.iconColor }} /> */}
                    <Typography variant="body1">
                      {item.title}
                    </Typography>
                    <Typography variant="body2">{item.price}</Typography>
                  </Grid>
                ))}
              </Grid>

            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Right Grid */}

      <Grid item xs={12} sm={6} className="additional-info-containere">
        <Grid container spacing={3} className="dashboard-container">
          {/* First Grid - 3 Cards */}

          <Grid container spacing={2}>
            {[
              { icon: <AccountCircleIcon  />, title: "New Customers", value: "698", change: "-5%", week: "Last Week" },
              { icon: <AccountCircleIcon  />, title: "Total Profit:", value: "Rs 30.8k", change: "+15%", week: "Weekly Profit" },
              { icon: <AccountCircleIcon  />, title: "Total Profit:", value: "Rs 30.8k", change: "+15%", week: "Monthly Profit" },
            ].map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card className="info-cards">
                  <CardContent>
                    <div className="icon-container">{item.icon}</div>
                    <Typography>{item.title}</Typography>
                    <Typography variant="h5">{item.value}  <span className='dashboard_sales_span'>{item.change}</span> </Typography>
                    <Typography variant="body2" className={item.change.includes("-") ? "negative" : "positive"}>
                      {item.change}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {item.week}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid className='top-selling-products-bar'>
          <Typography variant="h5" className="section-heading">Top Selling Products</Typography>
          <Bar data={barData} options={barOptions} />
        </Grid>
      </Grid>
    </Grid>


  );
};

export default SalesDashboard;
