import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Navbar() {
    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = (hoverState) => {
        setIsHovered(hoverState);
    };

    const data = {
        nav: [
            { name: "Features" },
            { name: "Industries" },
            { name: "Company" },
            { name: "Resources" }
        ]
    };

    return (
        <div>
            <nav className='absolute top-0 left-0 right-0 z-10'>
                <Container className='pt-4 ps-4'>
                    <Row className='border-bottom pb-4 px-0'>
                        <Col lg={3}>
                            <img src="https://www.cietrade.com/wp-content/uploads/2022/12/cietrade_logo.svg" alt="logo" width={150} />
                        </Col>
                        <Col lg={9} className='flex text-white font-bold'>
                            <div className="relative d-flex inline-block text-left text-white" onMouseEnter={() => toggleHover(true)} onMouseLeave={() => toggleHover(false)}>
                                {data.nav.map((item, index) => (
                                    <Col lg={3} key={index}>
                                        <button className="hover:text-red-600 font-bold px-3 py-2 rounded-md flex items-center">{item.name} <i class="fa-solid fa-angle-down ps-2 pt-1"></i></button>
                                        {isHovered && (
                                            <div className="absolute mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                                                <ul className="py-1 bg-red-600 text-white font-semibold">
                                                    <li><a href="#" className="block ps-4 py-2 text-sm">Option 1</a></li>
                                                    <li><a href="#" className="block ps-4 py-2 text-sm">Option 2</a></li>
                                                    <li><a href="#" className="block ps-4 py-2 text-sm">Option 3</a></li>
                                                </ul>
                                            </div>
                                        )}
                                    </Col>
                                ))}
                            </div>
                            <a href='#' className="hover:text-red-600 bg-red-600 hover:bg-white px-4 mx-4 py-2 flex">Request Demo<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                            <a href='#' className='hover:text-red-600 ps-4 py-2'>Login to cieTrade.net</a>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </div>
    )
};

export default Navbar;