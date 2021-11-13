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
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom';

const ManageAllOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const history = useHistory();

    useEffect( ()=> {
        const url = `https://shrouded-dusk-10588.herokuapp.com/orders`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, []);

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

    // Update Status
    const handleOrderStatusChange = (order ) => {
        if(order.orderStatus === 'Pending') {
            const updatedOrder = {
                id: order.id, 
                userName: order.userName,
                userEmail: order.userEmail,
                orderName: order.orderName,
                orderPrice: order.orderPrice,
                orderDescription: order.orderDescription,
                orderStatus: 'Shipped'
            }
                const url = `https://shrouded-dusk-10588.herokuapp.com/orders/${order._id}`;
                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedOrder)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.modifiedCount > 0) {
                        alert('Updated Successfully.');
                        window.location.href = "/dashboard";
                        
                        // setOrders({});
                    }
                })
                // e.preventDefault();
            
            
        }
    }

    return (
        <div>
            <h2>All Orders: {orders.length} </h2>
            <TableContainer component={Paper}>
                <Table sx={{ }} aria-label="Orders table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">User Email</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Product Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders.map((order) => (
                        <TableRow
                        key={order._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center" component="th" scope="row">
                                {order.userEmail}
                            </TableCell>
                            <TableCell align="center">{order.userAddress}</TableCell>
                            <TableCell align="center">{order.orderName}</TableCell>
                            <TableCell align="center">{order.orderPrice}</TableCell>
                            <TableCell align="center">{order.orderStatus}</TableCell>
                            <TableCell align="center">
                                <Button onClick={() => handleOrderStatusChange(order)} variant="contained" size="medium" >Update Status</Button>
                            </TableCell>
                            <TableCell align="center">
                                <Button onClick={() => handleDeleteOrder(order._id)}>
                                    <IconButton aria-label="delete" size="large">
                                        <DeleteIcon fontSize="inherit"/>
                                    </IconButton>
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

export default ManageAllOrders;