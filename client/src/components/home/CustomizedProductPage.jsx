import React, { useState, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Importing arrow icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Productpage.css";
import {
    Box,
    Typography,
    Link,
    Breadcrumbs,
    Stack,
    Rating,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    Card,
    CardContent,
    Grid2,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import Grid from "@mui/material/Grid";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";

//data test
import {
    product,
    warentyinfo,
    offers,
    data_specifications,
    delivery_data,
    fast_delivery_data,
    highlightsData,
    descriptionData,
    user_review_data, qsn_ans_data, image_product_page,
} from "../../constants/data";
import { grey } from "@mui/material/colors";
import { borderBottom, padding } from "@mui/system";

// rating start
import { LinearProgress, Avatar } from "@mui/material";
// qsn and ans section
import {
    CardHeader,
    IconButton,
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// last slider
import Slide from './Slide';
import { useSelector } from 'react-redux';

// DROPDOWN MENU
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";


const CustomizedProductPage = () => {
    // Handle breadcrumb click event
    const handleClick = (event) => {
        event.preventDefault();
        console.log("Breadcrumb clicked!");
    };
    const [selectedColor, setSelectedColor] = useState("black");
    const {
        image,
        user_feedback,
        description,
        Sku,
        Brand,
        rating,
        Availaility,
        Category,
        sale_price,
        actual_price,
        discount,
    } = product[0];

    // Breadcrumb items
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
        <Link
            underline="hover"
            key="1"
            color="inherit"
            href="/"
            onClick={handleClick}
        >
            Category
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/products"
            onClick={handleClick}
        >
            Laptops
        </Link>,
        <Typography key="3" className="product-breadcrumb-particular-page">
            Customized Product Page
        </Typography>,
    ];



    // rating Star
    const [reviews, setReviews] = useState([
        { rating: 5 },
        { rating: 4 },
        { rating: 3 },
        { rating: 5 },
        { rating: 4 },
        { rating: 2 },
        { rating: 1 },
    ]);

    const averageRating =
        reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

    const ratingCounts = [1, 2, 3, 4, 5].map(
        (star) => reviews.filter((review) => review.rating === star).length
    );

    // question and answer
    const [qaData, setQaData] = useState([]);
    useEffect(() => {
        setQaData(qsn_ans_data);
    }, []);

    const handleLike = (id) => {
        setQaData((prevQaData) =>
            prevQaData.map((item) =>
                item.id === id ? { ...item, likes: item.likes + 1 } : item
            )
        );
    };

    const handleDislike = (id) => {
        setQaData((prevQaData) =>
            prevQaData.map((item) =>
                item.id === id ? { ...item, dislikes: item.dislikes + 1 } : item
            )
        );
    };

    // slider last
    const { products } = useSelector(state => state.getProducts)

    // left side content
    const [mainImage, setMainImage] = useState('defaultImage.jpg');
    const [quantity, setQuantity] = useState(1);

    const extraImages = [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/1/4/r/-original-imah4zcwvvhmzgxr.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/u/8/l/-original-imah77ddczjgksng.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/128/128/xif0q/computer/t/l/k/-original-imagfdf4gyhvzmkf.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/128/128/xif0q/computer/r/k/l/-original-imagfdf4dpgx7vhx.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/r/9/i/-original-imagfdf43zfaab4z.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/l/b/o/-original-imagfdf4aaczgywf.jpeg?q=70&crop=false"
    ];


    const handleBuyNow = () => {
        console.log("Buying now...");
    };

    const handleAddToCart = () => {
        console.log("Adding to cart...");
    };

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };



    // image slidess : left side image
    const [primaryImageIndex, setPrimaryImageIndex] = useState(0);

    const handleLeftArrowClick = () => {
        setPrimaryImageIndex((prevIndex) => (prevIndex === 0 ? extraImages.length - 1 : prevIndex - 1));
    };

    const handleRightArrowClick = () => {
        setPrimaryImageIndex((prevIndex) => (prevIndex === extraImages.length - 1 ? 0 : prevIndex + 1));
    };

    const handleImageClick = (image) => {
        const index = extraImages.indexOf(image);
        if (index !== -1) {
            setPrimaryImageIndex(index);
        }
    };

    // States for dropdowns
    const [memory, setMemory] = useState("8GB");
    const [storage, setStorage] = useState("256GB SSD");
    const [generation, setGeneration] = useState("10th Gen");

    const handleMemoryChange = (event) => setMemory(event.target.value);
    const handleStorageChange = (event) => setStorage(event.target.value);
    const handleGenerationChange = (event) => setGeneration(event.target.value);

    return (
        <Grid>
            <Box>
                {/* Breadcrumbs with imports and structure */}
                <Stack spacing={2} className="product-breadcrumb">
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                </Stack>

                {/* Page Content */}
                <Grid container spacing={3} className="product-page-content">

                    {/* Left Side: Product Image */}

                    <Grid xs={12} md={6} sx={{
                        position: 'sticky',
                        top: 0,
                        height: '20%',
                        overflowY: 'auto',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 1,
                    }} className="leftside_content">

                        <Box className="product-image" sx={{ textAlign: "center" }}>
                            <img
                                src={extraImages[primaryImageIndex]}
                                alt={Brand}
                                style={{ width: "100%", maxWidth: "330px", height: "auto" }}
                            />
                        </Box>



                        <Grid container spacing={1} sx={{ overflowX: 'auto', justifyContent: 'center', alignItems: 'center' }}>
                            {/* Left Arrow Button */}
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: '50%',
                                    backgroundColor: 'orange',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    '&:hover': {
                                        backgroundColor: 'darkorange',
                                    },
                                }}
                                onClick={handleLeftArrowClick}
                            >
                                <ArrowBackIcon />
                            </Button>

                            {/* Images */}
                            {extraImages.map((extraImage, index) => (
                                <Grid item key={index} className="image_extra_section">
                                    <img
                                        src={extraImage}
                                        alt={`Extra ${index + 1}`}
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            cursor: "pointer",
                                            textAlign: "center",
                                            padding: "8px",
                                            borderRadius: "2px",
                                            border:
                                                primaryImageIndex === index
                                                    ? "2px solid orange"
                                                    : "0.5px solid #E4E7E9",
                                        }}
                                        onClick={() => handleImageClick(extraImage)}
                                        className="image_section_extra"
                                    />
                                </Grid>
                            ))}

                            {/* Right Arrow Button */}
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: '50%',
                                    backgroundColor: 'orange',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    '&:hover': {
                                        backgroundColor: 'darkorange',
                                    },
                                }}
                                onClick={handleRightArrowClick}
                            >
                                <ArrowForwardIcon />
                            </Button>
                        </Grid>



                        <Grid container sx={{ justifyContent: 'center', alignItems: 'center', marginTop: 3 }}>
                            {/* Quantity Selector and Buttons */}
                            <Grid item className="in-de-button">
                                <Button
                                    variant="outlined"
                                    onClick={handleDecrement}
                                >
                                    -
                                </Button>
                            </Grid>

                            <Grid item className="in-de-button">
                                <Typography variant="h6">{quantity}</Typography>
                            </Grid>

                            <Grid item className="in-de-button">
                                <Button
                                    variant="outlined"
                                    onClick={handleIncrement}
                                >
                                    +
                                </Button>
                            </Grid>

                            {/* Buy Now Button */}
                            <Grid item style={{
                                textAlign: 'center'
                            }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleBuyNow}
                                    sx={{ marginLeft: "16px", background: "#0712B7", width: "170px", borderRadius: "14px" }}
                                >
                                    Buy Now
                                </Button>
                            </Grid>
                            {/* Add to Cart Button */}
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    onClick={handleAddToCart}
                                    sx={{ width: "140px", marginLeft: "5px", borderColor: "#0712B7", color: "#0712B7" }}
                                >
                                    + Add to Cart
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Right Side: Product Details */}
                    <Grid xs={12} md={6}>
                        <Grid className="product-details">
                            {/* Product Title */}
                            <Typography
                                variant="body1"
                                className="product-heading-description"
                            >
                                {description}
                            </Typography>

                            {/* SKU, Brand, Category ,Availability */}
                            <Grid container spacing={2} className="product-details-container">
                                {/* Left Side: Sku and Brand */}
                                <Grid item xs={12} md={6}>
                                    <Typography variant="body2" sx={{ marginTop: 2 }}>
                                        <span className="productpage-light-text"> Sku:</span>{" "}
                                        <strong>{Sku}</strong>
                                    </Typography>
                                    <Typography variant="body2">
                                        <span className="productpage-light-text"> Brand:</span>{" "}
                                        <strong>{Brand}</strong>
                                    </Typography>
                                </Grid>

                                {/* Right Side: Availability and Category */}
                                <Grid item xs={12} md={6}>
                                    <Typography variant="body2" sx={{ marginTop: 2 }}>
                                        <span className="productpage-light-text">
                                            {" "}
                                            Availability:
                                        </span>
                                        <strong>
                                            <span
                                                style={{
                                                    color: Availaility === "In Stock" ? "green" : "red",
                                                }}
                                            >
                                                {Availaility}
                                            </span>
                                        </strong>
                                    </Typography>
                                    <Typography variant="body2">
                                        <span className="productpage-light-text"> Category:</span>
                                        <strong>{Category}</strong>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} className="rating-feedback-container">
                                {/* Rating */}
                                <Grid item xs={12} className="rating-item">
                                    <Rating
                                        name="rating"
                                        value={5}
                                        precision={0.5}
                                        readOnly
                                        className="deal-rating"
                                    />
                                    {rating}
                                    <span className="productpage-light-text">
                                        {" "}
                                        ({user_feedback} User feedback)
                                    </span>
                                </Grid>
                            </Grid>
                            <Grid className="pricing-container">
                                {/* Sale Price */}
                                <Typography variant="h6" className="sale-price">
                                    {sale_price}
                                </Typography>

                                {/* Actual Price */}
                                <Typography variant="body2" className="actual-price">
                                    {actual_price}
                                </Typography>

                                {/* Discount */}
                                <Typography variant="body2" className="discount">
                                    {discount}
                                </Typography>
                            </Grid>
                        </Grid>
                        <hr className="hr_tag" />

                        <Grid container className="info-container" spacing={2}>
                            {warentyinfo.map((item) => (
                                <>
                                    <Grid item xs={12}>
                                        <Typography>
                                            <span className="productpage-light-text">Warranty: </span>{" "}
                                            {item.warenty}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p sx={{
                                            color: "grey"
                                        }}>
                                            <strong >Color</strong>
                                        </p>
                                        <RadioGroup row>
                                            {item.colors.map((color, index) => (
                                                <FormControlLabel
                                                    key={index}
                                                    value={color}
                                                    control={
                                                        <Radio
                                                            style={{
                                                                color: color,
                                                                border: "2px solid orange",
                                                            }}
                                                        />
                                                    }
                                                    label=""
                                                />
                                            ))}
                                        </RadioGroup>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Typography sx={{
                                            color: "grey"
                                        }}>Display Size</Typography>
                                        {item.displaySizes.map((size, index) => (
                                            <Button
                                                key={index}
                                                variant="outlined"
                                                className="product-size-button"
                                            >
                                                {size}
                                            </Button>
                                        ))}
                                    </Grid>
                                </>
                            ))}
                        </Grid>


                        {/* DROPDOWN MENU  */}
                        <Grid container sx={{ maxWidth: 800, padding: 1, marginTop: 2, marginBottom: 2 }} className="">

                            <Grid item xs={12} display="flex" justifyContent="space-between" gap={12}>

                                <Box flex={1}>
                                    <Typography variant="body1" gutterBottom className="dropdown_heading_section">
                                        Memory
                                    </Typography>
                                    <FormControl fullWidth >
                                        <Select value={memory} onChange={handleMemoryChange}
                                            sx={{
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "gray",
                                                },
                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "darkgray",
                                                },
                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "gray",
                                                },
                                            }}
                                        >
                                            <MenuItem value="4GB">4GB</MenuItem>
                                            <MenuItem value="8GB">8GB DDR-4 RAM</MenuItem>
                                            <MenuItem value="16GB">16GB</MenuItem>
                                            <MenuItem value="32GB">32GB</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                                {/* Storage Dropdown */}
                                <Box flex={1}>
                                    <Typography variant="body1" gutterBottom className="dropdown_heading_section">
                                        Storage
                                    </Typography>
                                    <FormControl fullWidth>
                                        <Select value={storage} onChange={handleStorageChange}
                                            sx={{
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "gray",
                                                },
                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "darkgray",
                                                },
                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "gray",
                                                },
                                            }}>
                                            <MenuItem value="256GB SSD">256GB</MenuItem>
                                            <MenuItem value="512GB SSD">512GB</MenuItem>
                                            <MenuItem value="1TB SSD">1TB</MenuItem>
                                            <MenuItem value="2TB SSD">2TB</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>

                            {/* Second Row: Generation Dropdown */}
                            <Grid item xs={12} sx={{ marginTop: 3 }}>
                                <Box className="2nd_line_dropdowen">
                                    <Typography variant="body1" gutterBottom className="dropdown_heading_section">
                                        Generation
                                    </Typography>
                                    <FormControl fullWidth className="dropdown_line_2" >
                                        <Select value={generation} onChange={handleGenerationChange}
                                            sx={{
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "gray",
                                                },
                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "darkgray",
                                                },
                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "gray",
                                                },
                                            }}>
                                            <MenuItem value="10th Gen">10th Gen</MenuItem>
                                            <MenuItem value="11th Gen">11th Gen</MenuItem>
                                            <MenuItem value="12th Gen">12th Gen</MenuItem>
                                            <MenuItem value="13th Gen">13th Gen</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>


                        <Grid container className="product-action-container">
                            {/* Wishlist Section */}
                            <Grid item xs={6} className="wishlist-container">
                                <Grid>
                                    <FavoriteBorderIcon />
                                    <span>Add to Wishlist</span>
                                </Grid>
                            </Grid>

                            {/* Share Section */}
                            <Grid item xs={6} className="share-container">
                                <Typography>Share Product:</Typography>
                                <Grid className="share-icons">
                                    <ContentCopyOutlinedIcon style={{ color: "#475156" }} />
                                    <FacebookIcon style={{ color: "#3b5998" }} />
                                    <WhatsAppIcon style={{ color: "#25D366" }} />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* available offers */}
                        <Grid container spacing={2} className="product-offers">
                            {offers.map((offer) => (
                                <Typography
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    key={offer.id}
                                    className="product-offers-item"
                                >
                                    <Typography>
                                        <LocalOfferRoundedIcon className="product-offers-icon" />
                                    </Typography>
                                    <Typography>
                                        {offer.offer}{" "}
                                        <Link
                                            href={offer.link}
                                            className="product-offers-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            T&Cs!
                                        </Link>
                                    </Typography>
                                </Typography>
                            ))}
                            <Typography className="product-viewmore-offers">
                                View More 10 Offers
                            </Typography>
                        </Grid>

                        {/* delivery, highlisghts,description */}
                        <Grid className="product-details-dhd">
                            <Grid>
                                {/* Delivery Section */}
                                <div className="delivery-container">
                                    <Grid container className="section-heading">
                                        <Grid item xs={6} md={2}>
                                            <Typography variant="h6" className="delivery_highlight_desc">Delivery</Typography>
                                        </Grid>
                                        <Grid
                                            container
                                            direction="row"
                                            alignItems="center"
                                            justifyContent="center"
                                            className="delivery-content"
                                            md={4} gap={2}
                                        >
                                            <Grid item className="pincode_delevery_section" xs={6}>
                                                <Box>
                                                    <input
                                                        type="text"
                                                        className="input_pin_code"
                                                        placeholder="Enter Pincode for Delivery"
                                                        style={{
                                                            padding: "5px",
                                                            width: "109px",
                                                            borderRadius: "4px", fontSize: "8px",
                                                        }}
                                                        variant="body2"
                                                    />
                                                    <hr />
                                                    <Typography
                                                        variant="body2"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                        className="enter_pin_here"
                                                    >
                                                        Enter your PIN code to check estimated delivery date
                                                        and availability
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid>
                                                <Box>
                                                    <Button
                                                        sx={{
                                                            fontWeight: "bold",
                                                            backgroundColor: "transparent",
                                                            border: "none",
                                                            boxShadow: "none",
                                                            color: "inherit",
                                                            "&:hover": {
                                                                backgroundColor: "transparent",
                                                                boxShadow: "none",
                                                            },
                                                        }}
                                                        variant="text"
                                                    >
                                                        Check
                                                    </Button>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={6}
                                            container
                                            style={{
                                                display: "flex",
                                                padding: "14px 0px 0px 22px",
                                            }}
                                        >
                                            {delivery_data?.map((item) => (
                                                <Box item key={item.id}>
                                                    <Typography variant="body2" sx={{ fontSize: "12px" }}>
                                                        Delivery By {item.date}{" "}
                                                        <span className="delivery-color">
                                                            {item.details}
                                                        </span>
                                                    </Typography>
                                                </Box>
                                            ))}
                                            {fast_delivery_data?.map((item) => (
                                                <Grid item key={item.id}>
                                                    <Typography variant="body2" sx={{ fontSize: "12px" }}>
                                                        Delivery By {item.date}{" "}
                                                        <span className="delivery-color">
                                                            {item.details}
                                                        </span>
                                                    </Typography>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Grid>
                                </div>

                                {/* Highlights  */}
                                <Grid
                                    container
                                    className="highlights-section"
                                    direction="row"
                                    style={{
                                        marginTop: "1rem",
                                    }}
                                    spacing={3}
                                >
                                    <Grid item xs={6} container>
                                        <Typography
                                            variant="h6"
                                            align="left"
                                            className="section-heading delivery_highlight_desc"
                                        >
                                            Highlights
                                        </Typography>
                                    </Grid>

                                    <Grid
                                        justifyContent="space-evenly"
                                        className="highlight-text-typography"
                                        container
                                    >
                                        {highlightsData.map((group) => (
                                            <Grid item xs={4} md="auto" key={group.id}>
                                                <Box
                                                    className="highlights-content"
                                                    sx={{
                                                        fontSize: "10px",
                                                        minWidth: "200px",
                                                        borderRadius: "4px",
                                                        padding: "8px",
                                                    }}
                                                >
                                                    {group.highlights.map((highlight, idx) => (
                                                        <Typography
                                                            key={idx}
                                                            variant="body2"
                                                            sx={{
                                                                marginBottom: "8px",
                                                                display: "list-item",
                                                                listStyleType: "disc",
                                                                paddingLeft: "20px",
                                                            }}
                                                        >
                                                            {highlight}
                                                        </Typography>
                                                    ))}
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>

                                {/* Description Section */}
                                <Grid className="description-section" direction="row">
                                    {/* Section Heading */}
                                    <Grid container justifyContent="left">
                                        <Typography variant="h6" className="delivery_highlight_desc">
                                            Description
                                        </Typography>
                                    </Grid>

                                    {/* Description Content */}
                                    <Grid container>
                                        {descriptionData.map((item) => (
                                            <Grid item key={item.id} xs={12}>
                                                <Box
                                                    className="description-content"
                                                    sx={{ marginTop: "8px" }}
                                                >
                                                    <Typography
                                                        variant="body2"
                                                        sx={{ textAlign: "justify", fontSize: "12px", fontWeight: "500" }}
                                                    >
                                                        {item.description}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Specification Produc Section */}
                        <Grid
                            className="specification-details-section"
                            sx={{
                                border: "0.5px solid #E4E7E9",
                                background: "#FFF;",
                                mt: 2,
                                borderRadius: "5px",
                                marginTop: "5rem",
                                paddingBottom: "1.5rem",
                            }}
                        >
                            <Grid sx={{ m: 0.5 }}>
                                <Grid item sx={16} md={4} className="description-section">
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            paddingLeft: "16px",
                                            fontWeight: "bold",
                                        }}
                                        className="section-heading"
                                    >
                                        Specifications
                                    </Typography>
                                </Grid>
                                <hr className="hr_tag" />

                                <Grid
                                    container
                                    spacing={2}
                                    sx={{
                                        padding: "16px",
                                    }}
                                >
                                    <Grid item xs={8} variant="body2">
                                        <Typography variant="h6" sx={{ paddingTop: "1rem", fontSize: "16px", fontWeight: "500" }}>
                                            General
                                        </Typography>
                                    </Grid>

                                    {data_specifications.map((spec) =>
                                        Object.keys(spec).map(
                                            (key, index) =>
                                                key !== "id" && (
                                                    <Grid container item xs={12} key={index} spacing={2}>
                                                        <Grid item xs={2}>
                                                            <Typography
                                                                variant="body2"
                                                                sx={{ color: "grey" }}
                                                            >
                                                                {key}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <Typography
                                                                variant="body2"
                                                                style={{
                                                                    fontSize: "14px",
                                                                    fontWeight: "500"
                                                                }}
                                                            >
                                                                {spec[key]}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                )
                                        )
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Rating and Reviews */}
                        <Grid
                            className="rating-riview-section"
                            sx={{ mt: 2 }}
                            style={{
                                border: "1px solid #E4E7E9",
                                borderRadius: "5px",
                                marginTop: "2rem",
                            }}
                        >
                            <Grid>

                                <Grid container alignItems="center" className="rating_review_head_section">
                                    <Grid item xs className="rating_all_review">
                                        <Typography variant="h6"
                                            className="section-heading"
                                            sx={{ fontWeight: "bold", paddingLeft: "20px" }}
                                        > Rating & Reviews</Typography>
                                    </Grid>
                                    <Grid item className="add_new_review">
                                        <Typography variant="body2" style={{ cursor: "pointer", color: "white" }}>
                                            ADD REVIEW
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <hr className="hr_tag" />

                                <Grid
                                    container
                                    spacing={3}
                                    direction="row"
                                    alignItems="center"
                                    sx={{ padingTop: "20px" }}
                                >
                                    {/* Average Rating Section */}
                                    <Grid item xs={12} md={4}>
                                        <Box textAlign="center">
                                            <Typography variant="h3">
                                                {averageRating.toFixed(1)}
                                            </Typography>
                                            <Rating value={averageRating} readOnly precision={0.1} />
                                            <Typography variant="body2">
                                                {reviews.length} Reviews
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    {/* Rating Bars Section */}
                                    <Grid item xs={12} md={8} sx={{ marginTop: "1rem" }}>
                                        {ratingCounts
                                            .slice()
                                            .reverse()
                                            .map((count, index) => {
                                                const star = 5 - index;
                                                const percentage = (count / reviews.length) * 100 || 0;

                                                // Determine color based on star value
                                                let progressColor;
                                                if (star === 1) {
                                                    progressColor = "red";
                                                } else if (star === 2) {
                                                    progressColor = "orange";
                                                } else {
                                                    progressColor = "green";
                                                }

                                                return (
                                                    <Grid
                                                        container
                                                        alignItems="center"
                                                        key={star}
                                                        spacing={1}
                                                    >
                                                        <Grid item xs={2}>
                                                            <Typography variant="body2">
                                                                <span className="start_count">{star}</span>{" "}
                                                                <StarIcon sx={{ color: "orange" }} />
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <LinearProgress
                                                                variant="determinate"
                                                                value={percentage}
                                                                sx={{
                                                                    height: 10,
                                                                    borderRadius: 5,
                                                                    backgroundColor: "#f0f0f0",
                                                                    "& .MuiLinearProgress-bar": {
                                                                        backgroundColor: progressColor,
                                                                    },
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={2}>
                                                            <Typography variant="body2">{count}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                );
                                            })}
                                    </Grid>

                                    {/* User reviews */}

                                    {user_review_data.map((review) => (
                                        <Grid
                                            container
                                            key={review.id}
                                            alignItems="center"
                                            spacing={2}
                                            sx={{
                                                padding: "1rem",
                                                marginLeft: "2rem",
                                            }}
                                            className="user_data_represent"
                                        >
                                            {/* User Profile Picture */}
                                            <Grid item>
                                                <Avatar
                                                    src={review.profilePic}
                                                    alt={review.name}
                                                    sx={{ width: 50, height: 50 }}
                                                />
                                            </Grid>
                                            {/* User Details */}
                                            <Grid item xs={12} md={3}>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",
                                                    }}
                                                    className="user_details"
                                                >
                                                    <Typography variant="h6" sx={{ marginRight: "1rem" }} className="user_name_details">
                                                        {review.name}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="textSecondary"
                                                        sx={{ marginRight: "1rem", fontSize: "0.875rem" }}
                                                    >
                                                        {new Date(review.reviewDate).toLocaleDateString()}
                                                    </Typography>
                                                    {/* Rating */}
                                                    <Rating
                                                        name={`rating-${review.id}`}
                                                        value={review.rating}
                                                        readOnly
                                                        precision={0.5}
                                                        sx={{ fontSize: "1.2rem" }}
                                                    />
                                                </Box>
                                            </Grid>
                                            {/* Review Text */}
                                            <Grid item xs={12} className="review_note">
                                                <Typography
                                                    variant="body2"
                                                    sx={{ fontSize: "15px", paddingLeft: "1rem" }}
                                                    className="user_review_1"
                                                >
                                                    {review.review}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    ))}
                                </Grid>

                                <hr className="hr_tag" />

                                <Grid container alignItems="center">
                                    <Grid item xs className="read_all_review">
                                        <Typography variant="body1" className="read_all_button">Read All Reviews</Typography>
                                    </Grid>
                                    <Grid item className="plush_product_review">
                                        <Typography variant="h6" style={{ cursor: "pointer" }}>
                                            +
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Question & Answers */}
                        <Grid
                            className="rating-riview-section"
                            sx={{ mt: 2 }}
                            style={{
                                border: "0.5px solid #E4E7E9",
                                borderRadius: "5px",
                                marginTop: "2rem",
                            }}
                        >
                            <Grid container alignItems="center" className="rating_review_head_section">
                                <Grid item xs className="rating_all_review">
                                    <Typography variant="h6"
                                        className="section-heading"
                                        sx={{ fontWeight: "bold", paddingLeft: "20px" }}
                                    > Questions & Answers </Typography>
                                </Grid>
                            </Grid>
                            <hr className="hr_tag" />
                            <Box className="qsn_ans_section_2">
                                {qaData.map((item) => (
                                    <Card key={item.id} sx={{ borderBottom: "0.5px solid #E4E7E9" }}
                                        style={{
                                            "--Paper-shadow": `0px 2px 1px -1px rgba(0, 0, 0, 0),
                                           0px 1px 1px 0px rgba(0, 0, 0, 0),
                                           0px 1px 3px 0px rgba(0, 0, 0, 0)`
                                        }}
                                    >

                                        <CardContent sx={{ marginTop: 2, marginLeft: 2, marginRight: 4 }}>
                                            <Typography variant="body1" className="qsn_ans_section">
                                                Q: {item.question}
                                            </Typography>
                                            <Typography variant="body1" className="qsn_ans_section">
                                                A: {item.answer}
                                            </Typography>

                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'flex-end',

                                            }}>
                                                <CardHeader
                                                    avatar={<Avatar src={item.user.profile} alt={item.user.name} sx={{ width: 30, height: 30 }} />}
                                                    title={item.user.name}
                                                />
                                                <IconButton onClick={() => handleLike(item.id)}>
                                                    <ThumbUpIcon color="grey" />
                                                </IconButton>
                                                <Typography sx={{ marginRight: 2 }}>{item.likes}</Typography>
                                                <IconButton onClick={() => handleDislike(item.id)}>
                                                    <ThumbDownIcon color="grey" />
                                                </IconButton>
                                                <Typography>{item.dislikes}</Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Box>

                            <Grid container alignItems="center">
                                <Grid item xs className="read_all_review">
                                    <Typography variant="body1" className="read_all_button">Read All Reviews</Typography>
                                </Grid>
                                <Grid item className="plush_product_review">
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>



                <Grid style={{
                    height: "20vh"
                }}>

                </Grid>
            </Box>
        </Grid>
    );
};

export default CustomizedProductPage;
