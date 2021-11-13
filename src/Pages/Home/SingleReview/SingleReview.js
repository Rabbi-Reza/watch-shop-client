import { Container, Typography } from '@mui/material';
import React from 'react';
import Rating from 'react-rating';

const SingleReview = ({review}) => {
    const { userName, userReviewDescription, userReviewNumber } = review;
    return (
        <Container>
            <Typography variant="h5">Name: {userName}</Typography>
            <Typography variant="body2">Review: {userReviewDescription}</Typography>
            <Rating
                className="text-warning"
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                initialRating={userReviewNumber}
                readonly
            ></Rating>
        </Container>
    );
};

export default SingleReview;