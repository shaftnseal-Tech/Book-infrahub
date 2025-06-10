import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    Toolbar,
    useMediaQuery,
    useTheme,
    Switch,
    Select,
    MenuItem,
    Modal,
    Typography,
    TextField,
    Button,
} from '@mui/material';
import CustomButtons from './CustomButtons';
import LogoImg from '../../assets/zuvve_logo.png';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { useDarkMode } from './DarkModeProvider'; // Use the imported hook
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

// Styled component for the header (AppBar)
const StyledHeader = styled(AppBar)`
    background: #0712b7;
    height: 55px;
`;

// Styled component for the logo wrapper
const LogoWrapper = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    img {
        height: 45px;
        width: auto;
        object-fit: contain;
    }
`;

// Styled component for the menu button
const MenuButton = styled(IconButton)`
    display: none;

    @media (max-width: 600px) {
        display: block;
        position: absolute;
        right: 16px;
        top: 10px;
        font-size: 24px;
        color: white;
    }
`;

// Styled component for the search bar
const SearchBarWrapper = styled(Box)`
    display: flex;
    align-items: center;
    background: white;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    margin-left: 16px;
    border: none; /* Remove border */
`;
// Styled component for the location button
const LocationButton = styled(Button)`
    background: #0712b7;
    color:rgb(255, 255, 255);
    text-transform: none;
    // border: 1px solid #ccc;
    border-radius: 8px;
    height: 40px;
     width: 250px;
    margin-left: 16px;

    &:hover {
        background:#0712B7;
    }
        
    
`;

// Styled component for the search select
const SearchSelect = styled(Select)`
    width: 160px;
    height: 40px;
    border-radius: 4px 0 0 4px;
    border-right: 1px solid #ccc; /* Add right partition line */
    font-size: 15px;
    background-color: #fff; /* Ensure consistent background */
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Remove shadow if any */
    // border: 1px solid red; /* Remove outer border */
`;


// Styled component for the search input
const SearchInput = styled(TextField)`
    flex: 1;
    height: 40px;
    input {
        padding: 8px;
    }
    width: 430px;
    border: 1px solid #ccc; /* Remove border */
    fieldset {
        border: none; /* Remove Material-UI's default fieldset border */
    }
`;

// Styled component for the search button
const SearchButton = styled(Button)`
    height: 40px;
    width: 100px;
    border-radius: 0 4px 4px 0;
    background-color: #e1b83c;
    color: white;
    &:hover {
        background-color: #053c8a;
    }
    border: none; /* Remove border */
`;

const Headers = () => {
    const [open, setOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useDarkMode();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [location, setLocation] = useState('Location');
    const [locationModal, setLocationModal] = useState(false);
    const [searchCategory, setSearchCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleLocationModalOpen = () => setLocationModal(true);
    const handleLocationModalClose = () => setLocationModal(false);
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const list = () => (
        <Box width="250px">
            <Box display="flex" justifyContent="flex-end" padding="8px">
                <IconButton onClick={() => setOpen(false)}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                <li>
                    <CustomButtons />
                </li>
            </List>
        </Box>
    );

    return (
        <>
            <StyledHeader position="fixed" sx={{ background: darkMode ? '#333' : '#0712b7' }}>
                <Toolbar style={{ minHeight: 55, padding: '0 16px', display: 'flex', alignItems: 'center' }}>
                    {/* Logo */}
                    <LogoWrapper to="/" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
                        {/* <img src={LogoImg} alt="Logo" /> */}Bookie
                    </LogoWrapper>

                    {/* Location Button */}
                    {/* <LocationButton onClick={handleLocationModalOpen}>
                    <LocationOnOutlinedIcon/>  {location}
                    </LocationButton> */}

                    {/* Search Bar */}
                    <SearchBarWrapper>
                        <SearchSelect
                            value={searchCategory}
                            onChange={(e) => setSearchCategory(e.target.value)}
                            displayEmpty
                        >
                            <MenuItem value="">All Categories</MenuItem>
                            <MenuItem value="Books">Books</MenuItem>
                            <MenuItem value="Electronics">Electronics</MenuItem>
                            <MenuItem value="Clothing">Clothing</MenuItem>
                            <MenuItem value="Toys">Toys</MenuItem>
                        </SearchSelect>
                        {/* <SearchInput
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search Products"
                            variant="outlined"
                            InputProps={{ style: { paddingLeft: 10 } }}
                        />
                        <SearchButton
                            onClick={() => console.log(`Category: ${searchCategory}, Term: ${searchTerm}`)}
                        >
                            Search
                        </SearchButton> */}
                    </SearchBarWrapper>

                    {isSmallScreen && (
                        <MenuButton onClick={() => setOpen(true)}>☰</MenuButton>
                    )}

                    <Drawer open={open} onClose={() => setOpen(false)}>
                        {list()}
                    </Drawer>

                    {!isSmallScreen && (
                        <Box marginLeft="auto" display="flex" alignItems="center">
                            <CustomButtons />
                            <Switch checked={darkMode} onChange={toggleDarkMode} />
                        </Box>
                    )}
                </Toolbar>
            </StyledHeader>

            {/* Location Modal */}
            <Modal open={locationModal} onClose={handleLocationModalClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '8px',
                    }}
                >
                    <Typography variant="h6" marginBottom={2}>
                        Select Your Location
                    </Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        value={location}
                        onChange={handleLocationChange}
                        placeholder="Enter your city or location"
                    />
                    <Box mt={2} display="flex" justifyContent="flex-end">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleLocationModalClose}
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default Headers;
