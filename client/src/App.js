import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Box, CssBaseline, createTheme, ThemeProvider } from '@mui/material';

import './App.css';

import Headers from './components/header/Headers';
import { useDarkMode } from './components/header/DarkModeProvider';


import { Home } from './components/default';
import TemplateProvider from './templates/TemplateProvider';
import DataProvider from './context/DataProvider';
import DetailsView from './components/details/DetailsView';
import Footer from './components/footer/footer';

import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Otpverify from './components/Auth/Otpverify';
import Password from './components/Auth/Password';
import ResetPassword from './components/Auth/ResetPassword';

import AddProduct from './components/Products/add_product.jsx';

import Cart from './components/details/cart';
import Payment from './components/details/payment';
import Wishlist from './components/details/wishlist';
import Sidebar from './components/Categories/Sidebar';
import ProductGrid from './components/Categories/ProductGrid';
import Category from './components/Categories/Category';
import Error from './components/Auth/Error';


import Productpage from './components/home/Productpage';
import CustomizedProductPage from './components/home/CustomizedProductPage';
import ErrorPage from './components/home/ErrorPage';
import FaqPage from './components/home/FaqPage';
import AboutPage from './components/home/AboutPage';

import Dashboard from './components/home/Dashboard';


function AppContent(){

  const location = useLocation();
  const { isDarkMode } = useDarkMode();

  // Routes where Header and Footer should be hidden
  const authRoutes = ['/signup', '/otpverify', '/password', '/resetpassword'];
  const shouldHideHeaderFooter = authRoutes.includes(location.pathname);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      background: {
        default: isDarkMode ? '#121212' : '#ffffff',
        paper: isDarkMode ? '#1e1e1e' : '#ffffff',
      },
      text: {
        primary: isDarkMode ? '#ffffff' : '#000000',
        secondary: isDarkMode ? '#aaaaaa' : '#555555',
      },
    },
    typography: {
      fontFamily: 'Arial, sans-serif',
    },
    components: {
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: isDarkMode ? '#ffffff' : '#000000', // Label text color
          },
          shrink: {
            color: isDarkMode ? '#ffffff' : '#000000', // Shrunken label color
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff', // Field background color
            color: isDarkMode ? '#ffffff' : '#000000', // Input text color
          },
          notchedOutline: {
            borderColor: isDarkMode ? '#ffffff' : '#000000', // Border color
          },
        },
      },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* This will apply default styles */}
      <div>
        {!shouldHideHeaderFooter && <Headers />}
        <Box style={{ marginTop: !shouldHideHeaderFooter ? 54 : 0 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailsView />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/otpverify" element={<Otpverify />} />
            <Route path="/password" element={<Password />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/Productpage/:id" element={<Productpage />} />
            <Route path="/CustomizedProductPage/" element={<CustomizedProductPage />} />
            <Route path="/ErrorPage/" element={<ErrorPage />} />
            <Route path="/FaqPage/" element={<FaqPage />} />
            <Route path="/AboutPage/" element={<AboutPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/Sidebar" element={<Sidebar />} />
            <Route path="/ProductGrid" element={<ProductGrid />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/Error" element={<Error />} />
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </Box>
        {!shouldHideHeaderFooter && <Footer />}
      </div>
    </ThemeProvider>
  );
}

function App() {
  return (
    <TemplateProvider>
      <DataProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </DataProvider>
    </TemplateProvider>
  );
}

export default App;
