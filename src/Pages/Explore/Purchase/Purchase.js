import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Purchase = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    const { user, isLoading, authError } = useAuth();

    const userAddressRef = useRef();
    const userPhoneRef = useRef();

    useEffect(() => {
        fetch(`https://shrouded-dusk-10588.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);

    // Function for place order
    const handlePlaceOrder = e => {

        const userName = user?.displayName;
        const userEmail = user?.email;
        const userAddress = userAddressRef.current.value;
        const userPhone = userPhoneRef.current.value;
        const orderName = product.productName;
        const orderPrice = product.productPrice;
        const orderDescription = product.productDescription;
        const orderStatus = 'Pending';
            
        const newOrder = { id, userName, userEmail, userAddress, userPhone, orderName, orderPrice, orderDescription, orderStatus };

        const proceed = window.confirm('Are you sure, you want to Confirm Order ?');
        if(proceed) {
            fetch(`https://shrouded-dusk-10588.herokuapp.com/purchase`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newOrder)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order added Successfully.');
                    e.target.reset();
                    window.location.href = "/dashboard";
                }
            })
            e.preventDefault();
        }
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt: 2}} xs={12} md={12}>
                    <Typography variant="h4" gutterBottom>Place order for Product no: {id}</Typography>
                    <hr />
                    {
                        !isLoading &&
                        <form onSubmit={handlePlaceOrder}>
                            <Typography variant="h5">User Name: {user?.displayName}</Typography>
                            <Typography variant="h5">Email: {user?.email}</Typography>
                            <hr />
                            <Typography variant="h5">Product Name: {product.productName}</Typography>
                            <Typography variant="h6">Price: {product.productPrice}</Typography>
                            <Typography variant="body2">Description: {product.productDescription}</Typography>
                            <hr />
                            <label className="text-primary">User Address</label>
                            <textarea ref={userAddressRef} className="form-control" placeholder="Input Address Here" rows="3" required></textarea>

                            <label  className="text-primary">User Phone Number</label>
                            <input ref={userPhoneRef} step="any" type="number" className="form-control" placeholder="Input Phone Number" required/>
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Confirm Place Order</Button>
                        </form>
                    }
                    {isLoading && <CircularProgress/>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Purchase;