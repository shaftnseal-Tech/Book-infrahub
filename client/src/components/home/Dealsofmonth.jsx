import React from 'react';
import { Typography, Card, CardContent, CardMedia, Rating } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { deals } from '../../constants/data';
import './Dealsofmonth.css';
import { useNavigate } from 'react-router-dom';

const Dealsofmonth = () => {

    // const [deals, setDeals] = useState([]);

    // useEffect(() => {
    //     const fetchDeals = async () => {
    //         try {
    //             const response = await fetch('http://localhost:8000/api/deals'); // Backend API URL
    //             const data = await response.json();
    //             setDeals(data);
    //         } catch (error) {
    //             console.error('Error fetching deals:', error);
    //         }
    //     };

    //     fetchDeals();
    // }, []);

    const navigate = useNavigate();

    if (!deals || deals.length === 0) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Grid container spacing={4} className="deals-container">
            {/* Title Section */}
            <Grid item xs={12} className="title-section">
                <Typography variant="h7" className="title">
                    Deals of the Month
                </Typography>
            </Grid>

                <Grid className="deals-grid">
                    {/* Left Side: Deal 1 */}
                    <Grid xs={12} md={6} className="deal-left">
                        <Card className="card-left">
                            <CardMedia
                                component="img"
                                image={deals[0].image}
                                alt={deals[0].name}
                                className="card-media"
                            />
                            <CardContent>
                                <Typography className="deal-description"
                                    onClick={() => navigate(`/Productpage/${deals[0]}`)}
                                >
                                    {deals[0].description}
                                </Typography>
                                <Grid container alignItems="center" className="rating-container">
                                    <Rating
                                        name="rating"
                                        value={5}
                                        precision={0.5}
                                        readOnly
                                        className="deal-rating"
                                    />
                                    <Typography className="deal-rating-count">
                                        ({deals[0].ratingCount})
                                    </Typography>
                                </Grid>
                                <Typography className="deal-price">
                                    {deals[0].price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Right Side: Deals 2-7 */}
                    <Grid xs={12} md={6}>
                        <Grid container spacing={3}>
                            {deals.slice(1).map((deal) => (
                                <Grid key={deal.id} xs={12} sm={6} className="deal-right-grid">
                                    <Card className="card-right">
                                        <CardMedia
                                            component="img"
                                            image={deal.image}
                                            alt={deal.name}
                                            className="card-media-right"
                                        />
                                        <CardContent>
                                            <Typography className="deal-description">
                                                {deal.description}
                                            </Typography>
                                            <Grid container alignItems="center" className="rating-container">
                                                <Rating
                                                    name="rating"
                                                    value={5}
                                                    precision={0.5}
                                                    readOnly
                                                    className="deal-rating"
                                                />
                                                <Typography className="deal-rating-count">
                                                    ({deal.ratingCount})
                                                </Typography>
                                            </Grid>
                                            <Typography className="deal-price">
                                                {deal.price}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                </Grid>
        </Grid>
    );
};

export default Dealsofmonth;









// import React, { useState, useEffect } from 'react';
// import { Typography, Card, CardContent, CardMedia, Rating } from '@mui/material';
// import Grid from '@mui/material/Grid2';
// import './Dealsofmonth.css';
// import { useNavigate } from 'react-router-dom';

// const Dealsofmonth = () => {
//     const [deals, setDeals] = useState([]);

//     useEffect(() => {
//         const fetchDeals = async () => {
//             try {
//                 const response = await fetch('http://localhost:8000/api/deals');
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 console.log('Fetched data from backend:', data);
//                 if (Array.isArray(data)) {
//                     setDeals(data);
//                 } else {
//                     setDeals([data]);
//                 }
//             } catch (error) {
//                 console.error('Error fetching deals:', error);
//             }
//         };
    
//         fetchDeals();
//     }, []);
    

//     const navigate = useNavigate();

//     if (!Array.isArray(deals) || deals.length === 0) {
//         return <Typography>Loading...</Typography>;
//     }

//     return (
//         <Grid container spacing={4} className="deals-container">
//             <Grid item xs={12} className="title-section">
//                 <Typography variant="h7" className="title">
//                     Deals of the Month
//                 </Typography>
//             </Grid>

//             <Grid className="deals-grid">
//                 {/* Left Side: Deal 1 */}
//                 <Grid xs={12} md={6} className="deal-left">
//                     <Card className="card-left">
//                         {/* Check if deals[0] exists before accessing its properties */}
//                         {deals[0] && deals[0].image && (
//                             <CardMedia
//                                 component="img"
//                                 image={`http://localhost:8000${deals[0].image}`}
//                                 alt={deals[0]?.name}
//                                 className="card-media"
//                             />
//                         )}
//                         <CardContent>
//                             <Typography
//                                 className="deal-description"
//                                 onClick={() => navigate(`/Productpage/${deals[0]?._id}`)} // Use the correct field for navigation
//                             >
//                                 {deals[0]?.description}
//                             </Typography>
//                             <Grid container alignItems="center" className="rating-container">
//                                 <Rating
//                                     name="rating"
//                                     value={5}
//                                     precision={0.5}
//                                     readOnly
//                                     className="deal-rating"
//                                 />
//                                 <Typography className="deal-rating-count">
//                                     ({deals[0]?.ratingCount})
//                                 </Typography>
//                             </Grid>
//                             <Typography className="deal-price">
//                                 ${deals[0]?.price}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 {/* Right Side: Deals 2-7 */}
//                 <Grid xs={12} md={6}>
//                     <Grid container spacing={3}>
//                         {deals.slice(1).map((deal) => (
//                             <Grid key={deal.id} xs={12} sm={6} className="deal-right-grid">
//                                 <Card className="card-right">
                                   
//                                     {deal.image && (
//                                         <CardMedia
//                                             component="img"
//                                             image={`http://localhost:8000${deal.image}`}
//                                             alt={deal.name}
//                                             className="card-media-right"
//                                         />
//                                     )}
//                                     <CardContent>
//                                         <Typography className="deal-description"
//                                         onClick={() => navigate(`/Productpage/${deal?._id}`)}
//                                         >
//                                             {deal.description}
//                                         </Typography>
//                                         <Grid container alignItems="center" className="rating-container">
//                                             <Rating
//                                                 name="rating"
//                                                 value={deal.rating || 5}
//                                                 precision={0.5}
//                                                 readOnly
//                                                 className="deal-rating"
//                                             />
//                                             <Typography className="deal-rating-count">
//                                                 ({deal.ratingCount || 0})
//                                             </Typography>
//                                         </Grid>
//                                         <Typography className="deal-price">
//                                             ${deal.price}
//                                         </Typography>
//                                     </CardContent>
//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </Grid>
//     );
// };

// export default Dealsofmonth;
