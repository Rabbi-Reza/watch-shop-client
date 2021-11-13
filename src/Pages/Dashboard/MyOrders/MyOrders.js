import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect( ()=> {
        const url = `https://shrouded-dusk-10588.herokuapp.com/orders`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, []);

    const ordersFound = orders.filter(order => order.userName === user.displayName);

    // Delete an Order
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed) {
            const url = `https://shrouded-dusk-10588.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    alert('Deleted successfully');
                    const remainingOrders = orders.filter(order => order._id !== id);
                    setOrders(remainingOrders);
                }
            });
        }
    }

    return (
        <div>
            <h2>Orders: {ordersFound.length} </h2>
            <TableContainer component={Paper}>
                <Table sx={{ }} aria-label="Orders table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {ordersFound.map((order) => (
                        <TableRow
                        key={order._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {order.orderName}
                            </TableCell>
                            <TableCell align="center">{order.orderPrice}</TableCell>
                            <TableCell align="center">{order.orderDescription}</TableCell>
                            <TableCell align="center">{order.userAddress}</TableCell>
                            <TableCell align="center">
                                <Button onClick={() => handleDeleteOrder(order._id)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;