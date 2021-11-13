import React from 'react';
import DisplayReviews from '../DisplayReviews/DisplayReviews';
import Products from '../Products/Products';
import Banner from '../Banner/Banner';
import Followers from '../Followers/Followers';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Products />
            <DisplayReviews />
            <Followers />
            <Footer />
        </div>
    );
};

export default Home;