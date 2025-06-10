import { Box, styled, Typography } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useNavigate } from 'react-router-dom';

const Component = styled(Menu)`
  margin-top: 5px;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

const CircleIcon = styled(Box)`
margin-top:3px;
`

const Profile = ({ account, setAccount }) => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    setAccount('');
    handleClose();
    navigate('/login')
  };

  return (
    <>
      <Box>
        {account ? (
          <Typography
            style={{ marginTop: 2, cursor: 'pointer' }}
            onClick={handleClick}
          >
            {account}
          </Typography>
        ) : (
         <CircleIcon>
           <AccountCircleIcon fontSize="medium" />
         </CircleIcon>
        )}
      </Box>
      <Component
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {account && (
          <MenuItem onClick={logoutUser}>
            <PowerSettingsNewIcon color="primary" fontSize="small" />
            <Logout>Logout</Logout>
          </MenuItem>
        )}
      </Component>
    </>
  );
};

export default Profile;
