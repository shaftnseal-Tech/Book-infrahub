import React, { useEffect } from "react";
import "./AboutUs.css";
import aboutUs_image from "../../assets/about_us_image.png";
import { Grid, Card, CardContent, Avatar } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import {
    Box,
    Typography,
    Link,
    Breadcrumbs,
    Stack,
    Button,
    TextField,
} from "@mui/material";

import img1 from "../../assets/teamMember/img1.png";
import img2 from "../../assets/teamMember/img2.png";
import img3 from "../../assets/teamMember/img3.png";
import img4 from "../../assets/teamMember/img4.png";
import img5 from "../../assets/teamMember/img5.png";
import img6 from "../../assets/teamMember/img6.png";
import img7 from "../../assets/teamMember/img7.png";
import img8 from "../../assets/teamMember/img8.png";

import bannerimg from "../../assets/teamMember/banner_img.png";
import productImage from "../../assets/teamMember/Image.png";
import productImage1 from "../../assets/teamMember/Image1.png";

const teamMembers = [
    { name: "John Doe", role: "Chief Executive Officer", image: img1 },
    { name: "Jane Smith", role: "Assistant of CEO", image: img2 },
    { name: "Alice Brown", role: "Head of Designer", image: img3 },
    { name: "Bob Johnson", role: "UX Designer", image: img4 },
    { name: "Charlie White", role: "Data Scientist", image: img5 },
    { name: "Emma Davis", role: "Marketing Specialist", image: img6 },
    { name: "Oliver Wilson", role: "QA Tester", image: img7 },
    { name: "Sophia Martin", role: "Business Analyst", image: img8 },
];

const products = [
    {
        name: "Laptop Model A",
        image: productImage,
        description: "Powerful laptop for work and gaming.",
        price: "1,49,999",
    },
    {
        name: "Laptop Model B",
        image: productImage1,
        description: "Sleek design with high performance.",
        price: "1,49,999",
    },
    {
        name: "Laptop Model C",
        image: productImage,
        description: "Affordable and reliable laptop.",
        price: "1,49,999",
    },
];

const AboutPage = () => {
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
            About Us
        </Typography>,
    ];

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

                <Grid
                    container
                    spacing={2}
                    sx={{
                        width: "100%",
                        margin: "5rem auto",
                        padding: "0 20px",
                    }}

                    className="about_section"
                >
                    {/* Left Side Div */}
                    <Grid
                        item
                        xs={6}
                        className="leftside_section"
                        sx={{
                            height: "auto",
                            marginTop: "3rem",
                            paddingRight: "5rem",
                        }}
                    >
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{
                                color: "var(--Gray-00, #FFF)",
                                fontSize: "14px",
                                fontWeight: "600",
                                lineHeight: "20px",
                                borderRadius: "2px",
                                background: "#0712B7",
                                width: "8rem",
                                padding: "8px 16px",
                            }}
                        >
                            WHO WE ARE
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "40px",
                                fontWeight: "600",
                                lineHeight: "48px",
                                marginTop: "1rem",
                            }} className="about_heading"
                        >
                            ZUVVE - largest electronics retail shop in the world.
                        </Typography>
                        <Typography
                            variant="body2"
                            gutterBottom
                            paddingRight={"1rem"}
                            sx={{
                                color: "var(--Gray-700, #475156)",
                                fontSize: "15px",
                                fontStyle: "normal",
                                fontWeight: "500",
                                lineHeight: "normal",
                                marginTop: "1rem",
                            }} className="about_desc"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud . {" "}
                        </Typography>
                        <Box>
                            <Typography
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    marginTop: "1rem",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M13.875 7.875L5.625 16.125L1.5 12"
                                        stroke="#2DB324"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M22.4999 7.875L14.2499 16.125L12.0562 13.9313"
                                        stroke="#2DB324"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Great 24/7 customer services.
                            </Typography>
                            <Typography
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M13.875 7.875L5.625 16.125L1.5 12"
                                        stroke="#2DB324"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M22.4999 7.875L14.2499 16.125L12.0562 13.9313"
                                        stroke="#2DB324"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                600+ Dedicated employees.
                            </Typography>
                            <Typography
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M13.875 7.875L5.625 16.125L1.5 12"
                                        stroke="#2DB324"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M22.4999 7.875L14.2499 16.125L12.0562 13.9313"
                                        stroke="#2DB324"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                5+ Branches all over the world.
                            </Typography>
                            <Typography
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M13.875 7.875L5.625 16.125L1.5 12"
                                        stroke="#2DB324"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M22.4999 7.875L14.2499 16.125L12.0562 13.9313"
                                        stroke="#2DB324"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Over 1 Million Electronics Products
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Right Side Div */}
                    <Grid item xs={6} className="rightside_section" style={{
                    
                    }}>
                        <Grid container justifyContent="center" alignItems="center">
                            <Box
                                component="img"
                                src={aboutUs_image}
                                alt="Centered Image"
                                sx={{
                                    width: "648px",
                                    height: "536px",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <hr
                    style={{
                        border: "1px solid #E4E7E9 ",
                    }}
                />
                <Grid>
                    <Grid className="header_section">
                        <Typography
                            sx={{
                                color: "var(--Gray-900, #191C1F)",
                                textAlign: "center",
                                fontFamily: "'Public Sans', sans-serif",
                                fontSize: "32px",
                                fontStyle: "normal",
                                fontWeight: 600,
                                lineHeight: "40px",
                            }}
                        >
                            Our core team member
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        spacing={4}
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            padding: "20px",
                            margin: "0 auto",
                            maxWidth: "1200px",
                        }}
                        className="team_member"
                    >
                        {teamMembers.map((member, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card
                                    sx={{
                                        width: "280px",
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "24px",
                                        margin: "0 auto",
                                        borderRadius: "3px",
                                        border: "1px solid var(--Gray-100, #E4E7E9)",
                                        background: "var(--Gray-00, #FFF)",
                                    }}
                                    className="card_team"
                                >
                                    <Avatar
                                        src={member.image}
                                        alt={member.name}
                                        sx={{ width: 56, height: 56, marginRight: "16px" }}
                                    />
                                    <CardContent sx={{ padding: "0" }}>
                                        <Typography
                                            variant="h6"
                                            fontWeight="bold"
                                            sx={{
                                                color: "var(--Gray-900, #191C1F)",
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: 600,
                                                lineHeight: "24px",
                                            }}
                                        >
                                            {member.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            sx={{
                                                color: "var(--Gray-700, #475156)",
                                                fontSize: "14px",
                                                fontStyle: "normal",
                                                fontWeight: 400,
                                                lineHeight: "20px",
                                            }}
                                        >
                                            {member.role}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                <Grid className="banner_container"
                    sx={{
                        backgroundImage: `url(${bannerimg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "440px",
                        padding: "20px",
                    }} 
                >
                    <Grid className="heading_content">
                        <Typography
                            sx={{
                                color: "var(--Gray-900, #191C1F)",
                                fontSize: "32px",
                                fontWeight: "600",
                                lineHeight: "40px",
                                marginBottom: "1rem",
                            }}
                        >
                            Your trusted and reliable shopping platform
                        </Typography>
                        <Typography
                            sx={{
                                color: "black",
                                fontSize: "16px",
                                fontSize: "15px",
                                fontWeight: "500",
                                marginBottom: "1rem",
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
                        </Typography>

                        <Typography
                            sx={{
                                color: "white",
                                display: "flex",
                                width: "71px",
                                padding: "24px",
                                alignItems: "flex-start",
                                gap: "10px",
                                background: "#0712B7",
                                borderRadius: "100px",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M21.3844 11.3625L7.89375 3.11253C7.78018 3.04248 7.64998 3.00399 7.51658 3.00104C7.38318 2.99809 7.25141 3.03078 7.13486 3.09574C7.0183 3.16071 6.92119 3.25559 6.85354 3.3706C6.78589 3.48562 6.75015 3.61659 6.75 3.75003V20.25C6.75015 20.3835 6.78589 20.5144 6.85354 20.6295C6.92119 20.7445 7.0183 20.8393 7.13486 20.9043C7.25141 20.9693 7.38318 21.002 7.51658 20.999C7.64998 20.9961 7.78018 20.9576 7.89375 20.8875L21.3844 12.6375C21.4952 12.572 21.5869 12.4788 21.6507 12.367C21.7145 12.2552 21.748 12.1287 21.748 12C21.748 11.8713 21.7145 11.7449 21.6507 11.6331C21.5869 11.5213 21.4952 11.428 21.3844 11.3625Z"
                                    fill="white"
                                />
                            </svg>
                        </Typography>
                    </Grid>
                </Grid>

                {/* product section */}
                <Grid
                    sx={{
                        width: "100%",
                        margin: "0 auto",
                    }}
                >
                    <Grid
                        container
                        spacing={0}
                        sx={{
                            padding: "20px",
                            marginTop: "6rem",
                            marginBottom: "6rem",
                        }}
                    >
                        {/* FLASH SALE TODAY */}
                        <Grid item xs={12} sm={6} md={3} className="card_section">
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                sx={{ marginBottom: "10px" }}
                            >
                                FLASH SALE TODAY
                            </Typography>
                            {products.map((product, index) => (
                                <Card
                                    sx={{
                                        width: "100%",
                                        height: "104px",
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "18px",
                                        borderRadius: "3px",
                                        border: "1px solid var(--Gray-100, #E4E7E9)",
                                        background: "var(--Gray-00, #FFF)",
                                        marginBottom: "1rem",
                                    }}
                                    className="card_team"
                                >
                                    <Avatar
                                        src={product.image}
                                        alt={product.name}
                                        sx={{ width: 56, height: 56, marginRight: "16px" }}
                                        className="dp_product"
                                    />
                                    <CardContent sx={{ padding: "0" }}>
                                        <Typography
                                            variant="h6"
                                            fontWeight="bold"
                                            sx={{
                                                color: "var(--Gray-900, #191C1F)",
                                                fontSize: "14px",
                                                fontStyle: "normal",
                                                fontWeight: 400,
                                                lineHeight: "24px",
                                            }}
                                        >
                                            {product.description}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            sx={{
                                                color: "var(--Gray-700, #0712B7)",
                                                fontSize: "14px",
                                                fontStyle: "normal",
                                                fontWeight: 600,
                                                lineHeight: "20px",
                                            }}
                                        >
                                            {product.price}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Grid>

                        {/* BEST SELLERS */}
                        <Grid item xs={12} sm={6} md={3} className="card_section">
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                sx={{ marginBottom: "10px" }}
                            >
                                BEST SELLERS
                            </Typography>
                            {products.map((product, index) => (
                                <Card
                                    sx={{
                                        width: "100%",
                                        height: "104px",
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "18px",
                                        borderRadius: "3px",
                                        border: "1px solid var(--Gray-100, #E4E7E9)",
                                        background: "var(--Gray-00, #FFF)",
                                        marginBottom: "1rem",
                                    }}
                                    className="card_team"
                                >
                                    <Avatar
                                        src={product.image}
                                        alt={product.name}
                                        sx={{ width: 56, height: 56, marginRight: "16px" }}
                                        className="dp_product"
                                    />
                                    <CardContent sx={{ padding: "0" }}>
                                        <Typography
                                            variant="h6"
                                            fontWeight="bold"
                                            sx={{
                                                color: "var(--Gray-900, #191C1F)",
                                                fontSize: "14px",
                                                fontStyle: "normal",
                                                fontWeight: 400,
                                                lineHeight: "24px",
                                            }}
                                        >
                                            {product.description}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            sx={{
                                                color: "var(--Gray-700, #0712B7)",
                                                fontSize: "14px",
                                                fontStyle: "normal",
                                                fontWeight: 600,
                                                lineHeight: "20px",
                                            }}
                                        >
                                            {product.price}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Grid>

                        {/* TOP RATED*/}
                        <Grid item xs={12} sm={6} md={3} className="card_section">
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                sx={{ marginBottom: "10px" }}
                            >
                                TOP RATED
                            </Typography>
                            {products.map((product, index) => (
                                <Card
                                    sx={{
                                        width: "100%",
                                        height: "104px",
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "18px",
                                        borderRadius: "3px",
                                        border: "1px solid var(--Gray-100, #E4E7E9)",
                                        background: "var(--Gray-00, #FFF)",
                                        marginBottom: "1rem",
                                    }}
                                    className="card_team"
                                >
                                    <Avatar
                                        src={product.image}
                                        alt={product.name}
                                        sx={{ width: 56, height: 56, marginRight: "16px" }}
                                        className="dp_product"
                                    />
                                    <CardContent sx={{ padding: "0" }}>
                                        <Typography
                                            variant="h6"
                                            fontWeight="bold"
                                            sx={{
                                                color: "var(--Gray-900, #191C1F)",
                                                fontSize: "14px",
                                                fontStyle: "normal",
                                                fontWeight: 400,
                                                lineHeight: "24px",
                                            }}
                                        >
                                            {product.description}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            sx={{
                                                color: "var(--Gray-700, #0712B7)",
                                                fontSize: "14px",
                                                fontStyle: "normal",
                                                fontWeight: 600,
                                                lineHeight: "20px",
                                            }}
                                        >
                                            {product.price}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Grid>

                        {/* NEW ARRIVAL */}
                        <Grid item xs={12} sm={6} md={3} className="card_section">
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                sx={{ marginBottom: "10px" }}
                            >
                                NEW ARRIVAL
                            </Typography>
                            {products.map((product, index) => (
                                <Card
                                    sx={{
                                        width: "100%",
                                        height: "104px",
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "18px",
                                        borderRadius: "3px",
                                        border: "1px solid var(--Gray-100, #E4E7E9)",
                                        background: "var(--Gray-00, #FFF)",
                                        marginBottom: "1rem",
                                    }}
                                    className="card_team"
                                >
                                    <Avatar
                                        src={product.image}
                                        alt={product.name}
                                        sx={{ width: 56, height: 56, marginRight: "16px" }}
                                        className="dp_product"
                                    />
                                    <CardContent sx={{ padding: "0" }}>
                                        <Typography
                                            variant="h6"
                                            fontWeight="bold"
                                            sx={{
                                                color: "var(--Gray-900, #191C1F)",
                                                fontSize: "14px",
                                                fontStyle: "normal",
                                                fontWeight: 400,
                                                lineHeight: "24px",
                                            }}
                                        >
                                            {product.description}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            sx={{
                                                color: "var(--Gray-700, #0712B7)",
                                                fontSize: "14px",
                                                fontStyle: "normal",
                                                fontWeight: 600,
                                                lineHeight: "20px",
                                            }}
                                        >
                                            {product.price}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};

export default AboutPage;
