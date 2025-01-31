import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Plastic from '../../assets/img/Plastics.png';
import Ciemobile2 from '../../assets/img/cieMobile2.png';
import Booking from '../../assets/img/Booking.png';
import Pprc from '../../assets/img/PPRC.png';
import Glof from '../../assets/img/golf.webp';
import Artical from '../../assets/img/article.png';
import Cielocationweb from '../../assets/img/cieLocationwebsite.png';
import Dash from '../../assets/img/dash.png';
import Prse from '../../assets/img/PRSE.png';
import Ciedispatchweb from '../../assets/img/ciedispatchwebsite.png';
import Isri from '../../assets/img/ISRI.png';
import Plasticrecycling from '../../assets/img/plasticsrecycling.png';
import Freightview from '../../assets/img/Freightview.png';
import Untitled from '../../assets/img/Untitled.png';
import Bookingportal from '../../assets/img/bookingportal.png';
import pprc from '../../assets/img/PPRC.png';
import Scrap from '../../assets/img/scrap.png';
import Isrigolf from '../../assets/img/ISRIGolf.png';
import Isri2023 from '../../assets/img/ISRI2023.png';
import Pprc2022 from '../../assets/img/PPRC2022.png';
import Post1 from '../../assets/img/post.jpg';
import Post2 from '../../assets/img/post2.jpg';
import Post3 from '../../assets/img/post3.jpg';

function News() {
    const data = {
        detail: [
            { img: Plastic, title: "Past Event", label: "Visit us at the Plastics Recycling World Expo 2024 in Cleveland, OH", date: "October 21, 2024", description: "Join us for the annual Plastics Recycling World Expo..." },
            { img: Ciemobile2, title: "Press Releases", label: "cieTrade Launches Updated Mobile Reporting app, cieMobile", date: "October 9, 2024", description: "Updated cieMobile app helps recyclers and exporters..." },
            { img: Booking, title: "Press Releases", label: "cieTrade Launches an Automated Booking ETA Update Service for Logistics Management", date: "September 25, 2024", description: "New automated booking ETA update service..." },
            { img: Pprc, title: "Past Events", label: "Visit cieTrade at PPRC 2024 in Chicago, IL", date: "September 11, 2024", description: "Join us for the annual Paper and Plastics Recycling..." },
            { img: Glof, title: "Past Events", label: "cieTrade at the 2024 ReMA New England Chapter Golf Outing", date: "August 27, 2024", description: "Our team was excited to sponsor the 2024 ReMA..." },
            { img: Artical, title: "News", label: "cieTrade featured in Metals Recycling Magazine", date: "June 24, 2024", description: "cieTrade’s Marketing Manager, Pamela Prado, shares..." },
            { img: Cielocationweb, title: "Videos", label: "Check Out Our New cieLocation Video", date: "June 7, 2024", description: "cieLocation is cieTrade’s Inventory Scanning Mobile App..." },
            { img: Dash, title: "Videos", label: "Check Out Our New Customer Reporting Portal Video", date: "April 26, 2024", description: "ciePortal is cieTrade’s web-based online reporting solution..." },
            { img: Prse, title: "Past Events", label: "Visit cieTrade at PRSE 2024 in Amsterdam, NL", date: "April 26, 2024", description: "cieTrade is excited to attend the Plastics Recycling Show Europe..." },
            { img: Ciedispatchweb, title: "Product Updates", label: "Updated cieTrade Mobile Dispatch App", date: "March 8, 2024", description: "cieDispatch helps drivers track service requests..." },
            { img: Isri, title: "Past Events", label: "Visit cieTrade at ISRI 2024 in Las Vegas, NV", date: "January 31, 2024", description: "cieTrade is excited to once again attend the ISRI Convention..." },
            { img: Plasticrecycling, title: "Past Events", label: "Visit cieTrade at the 2024 Plastics Recycling Conference", date: "January 31, 2024", description: "Join us for the 2024 Plastics Recycling Conference..." },
            { img: Freightview, title: "Press Releases", label: "cieTrade Introduces Freight Booking Integration with Freightview", date: "October 18, 2023", description: "New integration partnership simplifies the freight tendering process..." },
            { img: Untitled, title: "Videos", label: "Check Out Our New Tradeshow Video", date: "October 9, 2023", description: "cieTrade’s modern cloud software provides everything you need..." },
            { img: Bookingportal, title: "Product Updates", label: "Easily Send Packing Lists and Container Photos", date: "September 21, 2023", description: "The new Booking Notification Portal allows users..." },
            { img: Scrap, title: "Past Events", label: "Visit Us at Scrap Expo 2023 in Louisville, KY", date: "September 5, 2023", description: "cieTrade is excited to be exhibiting at the 2023 Scrap Expo..." },
            { img: Isrigolf, title: "Past Events", label: "cieTrade at the 2023 ISRI New England Chapter Golf Outing", date: "August 28, 2023", description: "Our team was excited to sponsor and attend the 2023 ISRI..." },
            { img: Isri2023, title: "Past Events", label: "Visit cieTrade at ISRI 2023 in Nashville, TN", date: "March 31, 2023", description: "cieTrade is excited to once again attend the ISRI Convention..." },
            { img: Pprc2022, title: "Past Events", label: "Visit cieTrade at PPRC 2022 in Chicago, IL", date: "October 19, 2022", description: "cieTrade is excited to sponsor and exhibit at the 2022 PPRC..." },
            { img: Post1, title: "News", label: "ISRI Welcome Article on cieTrade", date: "January 31, 2022", description: "cieTrade President David Haber discusses..." },
            { img: Post2, title: "Product Updates", label: "Updated cieMobile App", date: "January 21, 2022", description: "cieTrade’s mobile reporting app, cieMobile, has been reintroduced..." },
            { img: Post3, title: "News", label: "Helping waste & recycling companies", date: "December 14, 2021", description: "Seth Goodman, CEO of Northstar Recycling, discusses how they use cieTrade..." }
        ]
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Calculate total pages
    const totalPages = Math.ceil(data.detail.length / itemsPerPage);

    // Get items for the current page
    const currentItems = data.detail.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div>
            <div className="h-full relative bg-cover" style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/08/shutterstock_1281656011-scaled.jpg.webp)` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="text-center relative py-40">
                    <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-white font-bold leading-tight">News & Events</h1>
                    <h1 className="lg:text-xl text-white py-3 leading-tight">Stay up to date on the latest happenings at cieTrade</h1>
                </div>
            </div>

            <Container>
                <Row>
                    {currentItems.map((item, index) => (
                        <Col lg={12} className="py-10" key={index}>
                            <Row>
                                <Col lg={6}>
                                    <img src={item.img} alt="" className="w-full" />
                                </Col>
                                <Col lg={6}>
                                    <h1 className="text-xl font-bold text-red-600">{item.title}</h1>
                                    <h1 className="text-5xl py-3 font-bold lh-sm">{item.label}</h1>
                                    <h1 className="text-xl text-gray-400"><i className="fa-solid fa-calendar pe-2"></i>{item.date}</h1>
                                    <h1 className="text-xl text-gray-500 py-3">{item.description}</h1>
                                    <div className="py-5"><a href="#" className="text-white bg-red-600 hover:bg-red-700 py-4 font-bold px-3">Request Demo<i className="fa-solid fa-arrow-right ps-1 pt-1"></i></a></div>
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>

                <div className="text-center py-4 border-none ">
                    <Button className=" text-red-600 hover:text-gray-500 text-lg font-semibold"
                        variant="transparent border-0"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <Button 
                            key={i}
                            variant={currentPage === i + 1 ? "text-gray-500" : "text-red-600 hover:text-gray-500"}
                            onClick={() => setCurrentPage(i + 1) }
                            className="mx-2  text-red-600 hover:text-gray-500 border-0 text-lg font-semibold"
                        >
                            {i + 1}
                        </Button>
                    ))}

                    <Button className=" text-red-600 hover:text-gray-500 text-lg font-semibold"
                        variant="transparent border-0"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </Button>
                </div>
            </Container>
        </div>
    );
}

export default News;
