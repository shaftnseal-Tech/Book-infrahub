import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { styled } from '@mui/system';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { Link } from "react-router-dom";
import NotificationsIcon from '@mui/icons-material/Notifications';

const CustomButtons = () => {
  const { account, setAccount } = useContext(DataContext);

  const Container = styled(Box)`
    display: flex;
    align-items: center;
    gap: 8px;
  `;

  const Wrapper = styled(Box)`
    margin: 0 3% 0 auto;
    display: flex;
    align-items: center;
    gap: 32px;

    @media (max-width: 600px) {
        flex-direction: column; 
        align-items: flex-start; 
        gap: 16px; 
        width: 100%; 
        margin: 0; 
        padding: 16px; 
    }
  `;

  const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;

    @media (max-width: 600px) {
      color: #000;
    }
  `;

  return (
    <Wrapper>

<Profile account={account} setAccount={setAccount} />


      {/* Page Links */}
      {/* <Typography style={{ marginTop: 3, cursor: 'pointer' }}> <StyledLink to="">Products</StyledLink></Typography>
      <Typography style={{ marginTop: 3, cursor: 'pointer', width: 135 }}><StyledLink to="">Become a Seller</StyledLink></Typography> */}

      {/* Conditional rendering for Signup/Login based on account state */}
      {!account ? (
        <Typography style={{ marginTop: 3, cursor: 'pointer' }}>
          {/* <StyledLink to="/Signup">Signup/</StyledLink> */}
          <StyledLink to="/Login">Login</StyledLink>
        </Typography>
      ) : null}

      {/* Cart Section */}
      <Container>
        <ShoppingCartOutlinedIcon/>
        <Typography><StyledLink to="/cart"></StyledLink></Typography>
      </Container>

      {/* Notification Section */}
      <Container>
        <NotificationsIcon />
        <Typography><StyledLink to="/cart"></StyledLink></Typography>
      </Container>
    </Wrapper>
  );
};

export default CustomButtons;
