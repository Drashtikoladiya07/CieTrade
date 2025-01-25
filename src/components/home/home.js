import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import laptop from '../../assets/img/laptop.webp';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    const data = {
        industries: [
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/02/homepage-service-icon-1.svg", name: "Brokerage", head: 'Brokerage', p: 'Our seamless, end-to-end brokerage solution organizes financials and logistics for every load with our intuitive and unique buy/sell form.' },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/05/recycling-plants-icon.svg", name: "Recycling Plants", head: 'Recycling Plants', p: 'Recycling software that integrates your scale with contract pricing, settlement, inventory, shipping, billing, and financials.' },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/05/international-trading.svg", name: "International Trading", head: 'International Trading', p: 'Automates your entire trading cycle from order management, planning, credit and compliance to execution, documentation, and profitability reporting.' },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/02/homepage-service-icon-3.svg", name: "Paper Merchants", head: 'Paper Merchants', p: 'Business management, inventory control, and converting software specifically adapted for paper merchants, brokers and job lot dealers.' },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/02/homepage-service-icon-4.svg", name: "Pulp & Paper Trading", head: 'Pulp & Paper Trading', p: 'Advanced software for international trading houses that handle pulp, paper, lumber and other commodities in the forest products industry.' },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/02/homepage-service-icon-5.svg", name: "Plastic Recycling", head: 'Plastic Recycling', p: 'Includes inventory control with barcode scanning, manages production jobs, tracks landed cost, material sources, yield, quality, gross profit and calculates commissions.' },
            { i1: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/agricultural-icon.png.webp", name: "Agricultural", head: 'Agricultural', p: 'Specialized software that drives profitability and increases visibility  for businesses manufacturing, trading and transporting agricultural commodities.' },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/02/homepage-service-icon-6.svg", name: "Waste Brokerage", head: 'Waste Brokerage', p: 'One seamless software that manages your entire workflow from service tracking and dispatching to billing and hauler reconciliation.' },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/05/scrap-claw.svg", name: "Scrap Metal", head: 'Scrap Metal', p: 'Scrap metal software for commercial yards and retail recycling, material processing, scrap commodity trading and compliance.' },
        ],
        slider: [
            { i1: "https://www.cietrade.com/wp-content/uploads/2024/07/APJ-2.webp", i2: "https://www.cietrade.com/wp-content/uploads/2024/07/ap-j-website.webp", p: "", },
            { i1: "https://www.cietrade.com/wp-content/uploads/2024/07/iStock-482693099.webp", i2: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/07/iSustain-logo-308x80-1.png.webp", p: "", },
            { i1: "https://www.cietrade.com/wp-content/uploads/2024/07/pasha-background.webp", i2: "https://www.cietrade.com/wp-content/uploads/2024/07/Pasha-logo-308x44-1.webp", p: "", },
            { i1: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/07/PET1.jpg.webp", i2: "https://www.cietrade.com/wp-content/uploads/2024/07/cpr-inc.-logo-308x44-1-1.webp", p: "", },
            { i1: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/01/shutterstock_418634776-scaled-630.jpg.webp", i2: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/02/homepage-slider2-logo.png.webp", p: "", },
            { i1: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/01/shutterstock_146583215-scaled-630.jpg.webp", i2: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/08/White-Paper-Tigers-Logo.png.webp", p: "", }
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
                    <Row className="g-0 p-5">
                        {data.industries.map((item, index) => (
                            <Col lg={4} key={index} className="text-center">
                                <div className="m-2 bg-white shadow-sm group relative" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                                    <div className={`px-5 py-4 shadow-sm transition-colors duration-300 ${hoveredIndex === index ? 'bg-red-600' : ''}`}>
                                        <img src={item.i1} className={`w-56 h-48 object-contain mx-auto transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`} />
                                        <h1 className={`text-2xl font-semibold py-4 transition-colors duration-300 ${hoveredIndex === index ? 'text-white' : 'text-black'}`}>{item.name}</h1>
                                        <h1 className={`border-b-2 w-16 m-auto transition-colors duration-300 ${hoveredIndex === index ? 'border-white' : 'border-red-600'}`}></h1>
                                    </div>
                                    {hoveredIndex === index && (
                                        <div className="absolute inset-0 bg-red-600 flex px-2 flex-col items-center justify-center">
                                            <h1 className='text-white px-4 py-2 text-center text-2xl font-bold'>{item.head}</h1>
                                            <p className="text-white px-4 py-2 text-center">{item.p}</p>
                                            <h1 className="mt-2 text-white font-bold tracking-wider">See Features<i class="fa-solid fa-arrow-right ms-3 mt-2 text-xs px-2 text-red-600 bg-white p-1 rounded-full"></i></h1>
                                        </div>
                                    )}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            {data.slider.map((item, index) => (
                <Row>
                    <Slider {...settings}>
                        <div key={index} className="w-screen bg-no-repeat bg-cover img-fluid" style={{ backgroundImage: `url(${item.i1})` }}>
                            <div className="py-24 text" style={{ background: "rgba(0, 0, 0, 0.6)" }}>
                                <Col lg={7} md={12} sm={12} key={index}>
                                    njbhuyguyhj
                                </Col>
                            </div>
                        </div>
                    </Slider>
                </Row>
            ))}
        </div>
    );
};

export default Home;