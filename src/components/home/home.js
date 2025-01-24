import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import laptop from '../../assets/img/laptop.webp';

function Home() {

    const data = {
        industries: [
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/02/homepage-service-icon-1.svg", name: "Brokerage" },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/05/recycling-plants-icon.svg", name: "Recycling Plants" },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/05/international-trading.svg", name: "International Trading" },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/02/homepage-service-icon-3.svg", name: "Paper Merchants" },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/02/homepage-service-icon-4.svg", name: "Pulp & Paper Trading" },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/02/homepage-service-icon-5.svg", name: "Plastic Recycling" },
            { i1: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/agricultural-icon.png.webp", name: "Agricultural" },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/02/homepage-service-icon-6.svg", name: "Waste Brokerage" },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/05/scrap-claw.svg", name: "Scrap Metal" },
        ]
    };

    return (
        <div>
            <div className="relative bg-cover h-screen" style={{ backgroundImage: `url('https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/02/paper-warehouse-background.png.webp')` }}>
                <div className="text-center pt-40 pb-20">
                    <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-white font-bold leading-tight">Recycling Software to <br />Manage and Grow Your Business</h1>
                </div>
                <img src={laptop} alt="laptop" className='absolute' />
            </div>
            <div className='bg-gray-100'>
                <Container>
                    <h1 className='text-center pt-56 text-4xl font-bold'>Industries We Serve</h1>
                    <Row className='g-0 p-5'>
                        {data.industries.map((item, index) => (
                            <Col lg={4} key={index} className='text-center'>
                                <div className=' bg-white py-5 shadow-sm'>
                                    <img src={item.i1} alt="i1" width={200} className='mx-auto' />
                                    <h1 className='text-2xl font-semibold py-4'>{item.name}</h1>
                                    <h1 className='border-b-2 w-16 m-auto border-red-600'></h1>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;