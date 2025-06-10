import React, { useEffect } from 'react';
import { Box, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
// import { products } from '../../constants/data';
import NavBar from './NavBar';
import Banner from './Banner';
// import MidSlide from './MidSlide';
// import MidSection from './MidSection';
import Slide from './Slide';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import Dealsofmonth from './Dealsofmonth';
import { homesupport } from '../../constants/data';
import './Home.css';
import Illustration from '../../assets/Illustration.jpg';
import HomeIntroAdv from './HomeIntroAdv';


// Import the products array
// import { products } from './path/to/products';

const Component = styled(Box)`
    padding: 20px 10px;
    
`;

const Home = () => {
    const { products } = useSelector(state => state.getProducts)


    console.log(products)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <Slide
                    data={products}
                    title='Featured Products'
                    timer={false}
                    multi={true}
                />
                <Dealsofmonth
                    data={products}
                    title='Deals of the Month'
                    timer={false}
                    multi={true}
                />

                <HomeIntroAdv
                    data={products}
                    title='Deals of the Month'
                    timer={false}
                    multi={true}
                />

                <Grid container spacing={2} className="support-grid">
                    {homesupport.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index} className="grid-item">
                            <Box className="box-container">
                                {item.icon}
                                <Typography variant="h4" className="heading">{item.heading}</Typography>
                                <Typography variant="body2" className="text">{item.text}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>



                <Box display="flex" justifyContent="center" mt={4}>
                    <img src={Illustration} alt="Illustration" className="illustration-image" />
                </Box>

            </Component>
        </>
    );
};

export default Home;
