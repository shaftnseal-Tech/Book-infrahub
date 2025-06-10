import React from "react";

import {
    Grid,
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
} from "@mui/material";
import {
    Home,
    ShoppingCart,
    Inventory,
    Add,
    BarChart,
    BrandingWatermark,
    Category,
    SubdirectoryArrowRight,
    Person,
    Settings,
    Help,
    Logout,
} from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import "./Dashboard.css";
import SalesDashboard from "./SalesDashboard";
import RecentOrders from "./Recentorders";

const Dashboard = () => {
    const links = [
        { text: "Sales", icon: <BarChart /> },
        { text: "Orders", icon: <ShoppingCart /> },
        { text: "Products", icon: <Inventory /> },
        { text: "Add Product", icon: <Add /> },
        { text: "Report", icon: <BarChart /> },
        { text: "Brand", icon: <BrandingWatermark /> },
        { text: "Category", icon: <Category /> },
        { text: "Sub Category", icon: <SubdirectoryArrowRight /> },
        { gap: true },
        { text: "My Profile", icon: <Person /> },
        { text: "Settings", icon: <Settings /> },
        { text: "Help", icon: <Help /> },
        { text: "Logout", icon: <Logout /> },
    ];

    const cardData = [
        {
            title: "TOTAL SALES",
            value: "₹7,00,000",
            change: "▲ 54% Last Month",
            shadowColor: "#AFDFFF",
        },
        {
            title: "TOTAL ORDERS",
            value: "₹12,50,000",
            change: "▲ 42% Last Month",
            shadowColor: "#FFD3B5",
        },
        {
            title: "TOTAL REVENUE",
            value: "₹3,28,000",
            change: "▲ 38% Last Month",
            shadowColor: "#C1FEBC",
        },
        {
            title: "TOTAL CUSTOMERS",
            value: "1500",
            change: "▲ 20% last month",
            shadowColor: "#A0A5F4",
        },
    ];


    return (
        <Grid container className="dashboard-container">
            {/* Left Sidebar */}
            <Grid item xs={2} className="dashboard-sidebar">
                <Card className="sidebar-card">
                    <CardContent>
                        <Typography  className="sidebar-title">
                            <HomeIcon className="dashboard_homeicon" /> Dashboard
                        </Typography>
                        <List>
                            {links.map((item, index) =>
                                item.gap ? (
                                    <Divider key={index} style={{ margin: "16px 0" }} />
                                ) : (
                                    <ListItem button key={index} className="sidebar-link">
                                        {item.icon}
                                        <ListItemText
                                            primary={item.text}
                                            style={{ marginLeft: "8px" }}
                                        />
                                    </ListItem>
                                )
                            )}
                        </List>
                    </CardContent>
                </Card>
            </Grid>

            {/* Right Content (Cards) */}
            <Grid item xs={10} className="dashboard-content">
                <Grid container spacing={3}>
                    {cardData.map((card, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card
                                className="dashboard-card"
                                style={{
                                    boxShadow: `2px 4px 0px 0px  ${card.shadowColor || "#AFDFFF"
                                        }`, // Dynamically setting shadow color
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" className="dashboard-card-title">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="h4" className="dashboard-card-value">
                                        {card.value}
                                    </Typography>
                                    <Typography variant="body2" className="dashboard-card-change">
                                        {card.change}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Grid style={{ marginTop: "5%" }}>
                    <SalesDashboard />
                </Grid>

                <Grid >
                    < RecentOrders />
                </Grid>

            </Grid>
        </Grid>
    );
};

export default Dashboard;
