import React, { useState, useEffect } from 'react';
import SingleReview from '../SingleReview/SingleReview';
import './DisplayReviews.css';

const DisplayReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-dusk-10588.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);

    return (
        <>
            <h2 className="text-primary mt-5"> All Reviews </h2>
            <hr />
            <div className="review-container mb-3">
                {
                    reviews.slice(0,6).map(review => <SingleReview
                        key={review._id}
                        review={review}></SingleReview>)
                }
            </div>
            <hr />
        </>
    );
};

export default DisplayReviews;