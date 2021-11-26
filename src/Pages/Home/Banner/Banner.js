import React from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <div>
            <>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src='https://i.ibb.co/YPjsQYG/buy-rolex-watch-640x320.jpg'
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3 className="text-info">Buy Rolex</h3>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src='https://i.ibb.co/64v9WH2/classy-expensive-watches-map-640x320.jpg'
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3 className="text-info">Expensive Watches</h3>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src='https://i.ibb.co/yf5T8JS/cox-s-bazaar-50.jpg'
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3 className="text-info">Beauty Of Cox's Bazar</h3>
                        
                        </Carousel.Caption>
                    </Carousel.Item> */}
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src='https://i.ibb.co/3Y69g3y/refresh-best-watches-over-100-lead-1632783077-1-640x320.jpg'
                        alt="Fourth slide"
                        />
                        <Carousel.Caption>
                        <h3 className="text-info">Best Watch</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        </div>
    );
};

export default Banner;