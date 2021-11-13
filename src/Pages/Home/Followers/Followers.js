import React from 'react';
import './Followers.css';

const Followers = () => {
    return (
        <div className="container">
            <h2 className="text-primary mb-3">Followers Number</h2>
            <div className="followers d-flex p-3 justify-content-around">

                <div className="follower-item">
                    <h1 className="follower-head">2.9m </h1>
                    <p>Instragram Followers</p>
                </div>
                <div className="follower-item">
                    <h1 className="follower-head">502k </h1>
                    <p>Youtube Subscribers</p>
                </div>
                <div className="follower-item">
                    <h1 className="follower-head">147k </h1>
                    <p>Dribbble Shot Likes</p>
                </div>
            </div>
        </div>
    );
};

export default Followers;