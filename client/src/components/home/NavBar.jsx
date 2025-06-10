import { Typography, Box, styled } from '@mui/material'; 
import { navData } from '../../constants/data';

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px',
    overflowX: 'auto',
    [theme.breakpoints.down('lg')]: {
        margin: '20px 50px 0 50px',
    },
    [theme.breakpoints.down('md')]: {
        margin: '20px 20px 0 20px',
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: '10px 10px 0 10px',
    }
}));

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`;

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;

const NavBar = () => {
    return (
        <Component>
            {navData.map((data, index) => (
                <Container key={index}>
                    <img src={data.url} alt={data.text} style={{ width: 64 }} />
                    <Text>{data.text}</Text>
                </Container>
            ))}
        </Component>
    );
};

export default NavBar;
