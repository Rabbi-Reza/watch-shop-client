import React, { useState } from 'react';
import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert} from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const AddProduct = () => {
    const [productData, setProductData] = useState({});
    
    const { user, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...productData };
        newProductData[field] = value;
        setProductData(newProductData);
    }

    const addNewProduct = e => {
        fetch('https://shrouded-dusk-10588.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Product added Successfully.')
                e.target.reset();
            }
        })
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt: 2}} xs={12} md={12}>
                    <Typography variant="h4" gutterBottom>Add a New Product</Typography>
                    <hr />
                    {
                        !isLoading &&
                        <form onSubmit={addNewProduct}>
                            <TextField 
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic" 
                                label="Product Name" 
                                name="productName"
                                type="text"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField 
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic" 
                                label="Product Description" 
                                name="productDescription"
                                type="text"
                                onBlur={handleOnBlur}
                                variant="standard" 
                                multiline
                                rows={3} />
                            <TextField 
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic" 
                                label="Product Price" 
                                type="text"
                                name="productPrice"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField 
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic" 
                                label="Product Image" 
                                type="text"
                                name="productImage"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Add Product</Button>
                        </form>
                    }
                    {isLoading && <CircularProgress/>}
                    {/* {user?.email && <Alert severity="success">User Created Successfully!!</Alert>} */}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddProduct;