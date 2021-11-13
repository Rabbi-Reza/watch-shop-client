import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{width:'100%'}} src='https://i.ibb.co/W5jycHV/404.png' alt="" />
            <Link to="/">
                <button className="m-3 btn btn-danger">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;