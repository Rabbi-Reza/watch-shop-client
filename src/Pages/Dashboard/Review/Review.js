import React, { useRef } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';

const Review = () => {
    const { user, isLoading, authError } = useAuth();

    const userReviewDescriptionRef = useRef();
    const userReviewNumberRef = useRef();

    // Function for place review
    const handlePlaceReview = e => {
        const userName = user?.displayName;
        const userEmail = user?.email;
        const userReviewDescription = userReviewDescriptionRef.current.value;
        const userReviewNumber = userReviewNumberRef.current.value;

        const newReview = { userName, userEmail, userReviewDescription, userReviewNumber };

        const proceed = window.confirm('Are you sure, you want to Add Review ?');
        if(proceed) {
            fetch(`https://shrouded-dusk-10588.herokuapp.com/reviews`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newReview)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review added Successfully.');
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
                    <hr />
                    {
                        !isLoading &&
                        <form  onSubmit={handlePlaceReview}>
                            <Typography variant="h5">Name: {user?.displayName}</Typography>
                            <Typography variant="h5">Email: {user?.email}</Typography>
                            <hr />

                            <label className="text-primary">Review Description</label>
                            <textarea ref={userReviewDescriptionRef} className="form-control" placeholder="Input Review Description Here" rows="3" required></textarea>

                            <label  className="text-primary">User Review Number</label>
                            <input ref={userReviewNumberRef} step="any" type="number" className="form-control" placeholder="Input Number Between 1-5" required/>
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Add Review</Button>
                        </form>
                    }
                    {isLoading && <CircularProgress/>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Review;