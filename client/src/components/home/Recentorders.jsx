import React from 'react';
import { Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './RecentOrders.css';

const RecentOrders = () => {
    const orders = [
        { id: 434531, status: 'CANCELED', date: 'Dec 30, 2019 05:18', total: '1,500 (5 Products)', action: 'View Details' },
        { id: 434532, status: 'COMPLETED', date: 'Feb 2, 2019 19:28', total: '80 (11 Products)', action: 'View Details' },
        { id: 434533, status: 'CANCELED', date: 'Mar 20, 2019 23:14', total: '80 (3 Products)', action: 'View Details' },
        { id: 434534, status: 'DELIVERED', date: 'Dec 30, 2019 07:52', total: '80 (1 Products)', action: 'View Details' },
        { id: 543453, status: 'PENDING', date: 'Mar 20, 2019 23:14', total: '2,300 (2 Products)', action: 'View Details' },
        { id: 643453, status: 'PENDING', date: 'Dec 30, 2019 07:52', total: '2,300 (2 Products)', action: 'View Details' },
        { id: 743453, status: 'DELIVERED', date: 'Mar 20, 2019 23:14', total: '2,300 (4 Products)', action: 'View Details' },
        { id: 843453, status: 'PENDING', date: 'Feb 2, 2019 19:28', total: '2,200 (1 Products)', action: 'View Details' },
    ];




    // Function to get status color
    const getStatusColor = (status) => {
        switch (status) {
            case 'DELIVERED': return '#2DB224';
            case 'PENDING': return 'orange';
            case 'CANCELED': return '#EE5858';
            case 'COMPLETED': return '#2DB224';
            default: return 'black';
        }
    };

    return (
        <Grid container className="recent-orders-container" direction="column" spacing={2} style={{ width: '100%' }}>
            <Grid item container className="recent-orders-header" justifyContent="space-between" alignItems="center">
                <Typography variant="h6">Recent Orders</Typography>
                <Typography className="view-all">
                    <Box display="flex" alignItems="center" gap={0.5}>
                        View All <ArrowRightAltIcon fontSize="small" />
                    </Box>
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <TableContainer component={Paper} elevation={3} className="table-container" style={{ width: '100%' }}>
                    <Table>
                        <TableHead className="table-header">
                            <TableRow>
                                <TableCell>Order ID</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Total</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map(order => (
                                <TableRow key={order.id} hover>
                                    <TableCell>{order.id}</TableCell>
                                    <TableCell style={{ color: getStatusColor(order.status), fontWeight: 'bold' }}>
                                        {order.status}
                                    </TableCell>
                                    <TableCell>{order.date}</TableCell>
                                    <TableCell>{order.total}</TableCell>
                                    <TableCell>
                                        <Box display="flex" alignItems="center" gap={0.5} className="action-dashboard">
                                            {order.action}
                                            <ArrowRightAltIcon fontSize="small" />
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
};

export default RecentOrders;
