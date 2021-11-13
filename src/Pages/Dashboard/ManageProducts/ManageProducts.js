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
import { Button, Container, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const ManageProducts = ({ date }) => {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);

    // Get all Products
    useEffect( ()=> {
        const url = `https://shrouded-dusk-10588.herokuapp.com/products`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    // Delete an Offer
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed) {
            const url = `https://shrouded-dusk-10588.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    alert('Deleted successfully');
                    const remainingProducts = products.filter(product => product._id !== id);
                    setProducts(remainingProducts);
                }
            });
        }
    }

    return (
        <Container>
            <h2> Product Found: {products.length}  </h2>
            <TableContainer component={Paper}>
                <Table sx={{ }} aria-label="Orders table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Delete</TableCell>
                            <TableCell align="center">Update</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {products.map((product) => (
                        <TableRow
                        key={product._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {product.productName}
                            </TableCell>
                            <TableCell align="center">{product.productPrice}</TableCell>
                            <TableCell align="center">{product.productDescription}</TableCell>
                            <TableCell align="center"> 
                                <Button onClick={() => handleDeleteProduct(product._id)}>
                                    <IconButton aria-label="delete" size="large">
                                        <DeleteIcon fontSize="inherit"/>
                                    </IconButton>
                                </Button>
                            </TableCell>
                            <TableCell align="center">
                                <Link style={{textDecoration: 'none'}} to={`updateProduct/${product._id}`}>
                                    <Button variant="contained" size="medium" >Update</Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageProducts;