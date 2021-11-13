import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert} from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const UpdateProduct = () => {

    const [products, setProducts] = useState([]);
    const {id} = useParams();
    const { user, isLoading, authError } = useAuth();

    useEffect(() => {
        const url = `https://shrouded-dusk-10588.herokuapp.com/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    // Update Product
    const handleProductNameChange = e => {
        const updatedProductName = e.target.value;
        const updatedProduct = { 
            productName: updatedProductName, 
            productDescription: products.productDescription,
            productPrice: products.productPrice, 
            productImage: products.productImage  
        }
        setProducts(updatedProduct);
    }

    const handleProductDescriptionChange = e => {
        const updatedProductDescription = e.target.value;
        const updatedProduct = { 
            productName: products.productName, 
            productDescription: updatedProductDescription,
            productPrice: products.productPrice, 
            productImage: products.productImage  
        }
        setProducts(updatedProduct);
    }

    const handleProductPriceChange = e => {
        const updatedProductPrice = e.target.value;
        const updatedProduct = { 
            productName: products.productName, 
            productDescription: products.productDescription,
            productPrice: updatedProductPrice, 
            productImage: products.productImage  
        }
        setProducts(updatedProduct);
    }

    const handleProductImageChange = e => {
        const updatedProductImage = e.target.value;
        const updatedProduct = { 
            productName: products.productName, 
            productDescription: products.productDescription,
            productPrice: products.productPrice, 
            productImage: updatedProductImage  
        }
        setProducts(updatedProduct);
    }

    const handleUpdateOffer = e => {
        
        const url = `https://shrouded-dusk-10588.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                alert('Updated Successfully.');
                setProducts({});
                // window.location.href = "dashboard/manageProducts";
            }
        })

        e.preventDefault();
    }

    return (
        <div>
            <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt: 2}} xs={12} md={12}>
                    <Typography variant="h4" gutterBottom>Update Product no: {id}</Typography>
                    <hr />
                    {
                        !isLoading &&
                        <form onSubmit={handleUpdateOffer}>
                            <Typography variant="h6">Product Name</Typography>
                            <TextField 
                                sx={{ width: '75%', m: 1 }}
                                id="outlined-required" 
                                required
                                name="productName"
                                value={products.productName}
                                type="text"
                                onChange={handleProductNameChange}
                                variant="standard" />
                            <Typography variant="h6">Product Description</Typography>
                            <TextField 
                                sx={{ width: '75%', m: 1 }}
                                id="outlined-required" 
                                required
                                name="productDescription"
                                value={products.productDescription}
                                type="text"
                                onChange={handleProductDescriptionChange}
                                variant="standard" 
                                multiline
                                rows={3} />
                            <Typography variant="h6">Product Price</Typography>
                            <TextField 
                                sx={{ width: '75%', m: 1 }}
                                id="outlined-required" 
                                required
                                value={products.productPrice}
                                type="text"
                                name="productPrice"
                                onChange={handleProductPriceChange}
                                variant="standard" />
                            <Typography variant="h6">Product Image</Typography>
                            <TextField 
                                sx={{ width: '75%', m: 1 }}
                                id="outlined-required" 
                                required
                                value={products.productImage}
                                type="text"
                                name="productImage"
                                onChange={handleProductImageChange}
                                variant="standard" />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Update Product</Button>
                        </form>
                    }
                    {isLoading && <CircularProgress/>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Grid>
        </Container>
        </div>
    );
};

export default UpdateProduct;