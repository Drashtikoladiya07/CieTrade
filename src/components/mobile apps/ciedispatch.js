import { Row, Col, Container } from 'react-bootstrap';
import React from "react";
import cietwophone from '../../assets/img/ciedtwophones1.png.webp';
import Appstore from '../../assets/img/appstore.png';
import Googleplay from '../../assets/img/googleplay.png';
import Canusage from '../../assets/img/canusa.png';
import Driver from '../../assets/img/driver.png';
import Capture from '../../assets/img/capture.png';
import Selfservice from '../../assets/img/self-service.png';
import Ciemobile from '../../assets/img/ciemobile.png';
import { useState } from "react";
// import YouTube from 'react-youtube';

function Ciedispatch() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Does cieDispatch provide real-time information from my cieTrade account?",
            answer: "Yes, since cieDispatch is fully integrated with your cieTrade account, your data is automatically synced and your back-office can easily change assignments, make service additions and receive ticket status updates in real-time.",
        },
        {
            question: "Can I restrict information by user?",
            answer: "Yes, your business data is secured with individual user accounts and permissions that are centrally managed and restricts drivers to view only their own assigned service jobs.",
        },
        {
            question: "Does the app support route stops?",
            answer: "Yes, cieDispatch provides a detailed list of each stop and service for a specific route assignment. Route stops are listed in the order of assignment from the routing builder tool in cieTrade.",
        },
        {
            question: "Is my business information stored on my phone?",
            answer: "No, cieDispatch safeguards your business data and never stores business information on your mobile device.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <div className="h-full relative bg-cover bg-center  " style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/12/truck-driver-with-app.png.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative  py-40  ">
                    <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-white font-bold leading-tight">happy vaghasiya </h1>
                    <h1 className="lg:text-xl text-white py-3 leading-tight">Keep your Drivers Connected to the Office</h1>
                    <div className='my-5'>
                        <a href='#' className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold text-base ">Download Brochure<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                    </div>
                </div>
            </div>

            <Container>
                <Row className='g-0 p-20 lg:px-10 md:px-10 sm:px-10'>
                    <Col lg={6}><center><img src={cietwophone} className='w-full py-5 '></img></center></Col>
                    <Col lg={6} className='py-10'>
                        <h6 className='lg:text-5xl md:4xl sm:text-3xl font-bold py-3 lh-sm'>Help drivers track service requests, capture activity and provide instant status updates from anywhere.</h6>
                        <div className=' py-2'><h6 className='text-xl text-gray-500 '><span className='font-bold text-red-600'>cieDispatch </span> is a free mobile app that lets your drivers retrieve a list of assigned tickets, get directions to service locations, update job status, record notes, and even capture photos. Information is instantly updated in your existing cieTrade account, saving time and making it easier to manage services while eliminating double-entry.</h6></div>
                        <div className='flex py-2'>
                            <a href='https://apps.apple.com/us/app/cielocation/id1314428136'> <img src={Appstore} className='w-60'></img></a>
                            <a href='https://play.google.com/store/apps/details?id=com.cietradesystems.cieLocation&hl=en_US&gl=US'><img src={Googleplay} className='w-60 '></img></a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='bg-gray-900 text-center py-4'>
                <i class="fa-solid fa-quote-left text-white bg-red-500 p-1 rounded-full px-2 text-2xl"></i>
                <h6 className='text-white text-xl py-3 lh-base'>cieDispatch allows our drivers to instantly view their schedules and communicate important details about<br /> each pick-up to our back-office. It’s helped us create a seamless scheduling process and improve customer <br />service to our accounts.                </h6>
                <h6 className='text-white text-xl '>Mel Tamsiti, Director of Sales Enablement</h6>
                <center><img src={Canusage} alt="Norkol" className='img-fluid pt-2' /></center>
            </div>
            <Container>
                <Row className='g-0 p-20 '>
                    <Col lg={6} className='py-24'>
                        <h6 className='lg:text-5xl md:4xl sm:text-3xl font-bold py-3 lh-sm'>Keep Drivers Organized</h6>
                        <div className='flex py-2'><h6 className='text-xl text-gray-500 '>Eliminates paper dispatch sheets, allowing your drivers to instantly access all of their assigned service calls, see site instructions, and get turn-by-turn directions right from their own mobile device.</h6></div>
                    </Col>
                    <Col lg={6}><center><img src={Driver} className='w-full'></img></center></Col>
                </Row>
            </Container>

            <div className='g-0 p-20 bg-light '>
                <Row>
                    <Col lg={6}><center><img src={Capture} className='w-4/5'></img></center></Col>
                    <Col lg={6} className='py-24'>
                        <h6 className='lg:text-5xl md:4xl sm:text-3xl font-bold py-3 lh-sm'>Capture Photos & Notes</h6>
                        <div className='flex py-2'><h6 className='text-xl text-gray-500 '>Lets your drivers easily capture equipment or site photos, signatures, or write comments and explanations of failed services while on location, making it easier for dispatchers to manage and track activity.</h6></div>
                    </Col>
                </Row>
            </div>
            <Container>
                <div className='py-24 text-center'>
                    <h6 className='lg:text-5xl md:4xl sm:text-3xl font-bold py-3 lh-sm'>Obtain Instant Updates</h6>
                    <h6 className='text-xl text-gray-500 text-center'>Connectivity with your cieTrade account means that each ticket status is updated<br /> in real-time and drivers notes or photos are instantly updated with each dispatch <br />ticket, eliminating manual updates and double-entry of data.</h6>
                </div>
            </Container>
            <div className='bg-gray-900'>
                <Container >
                    <Row className='py-5'>
                        <h1 className='lg:text-5xl md:text-3xl sm:text-2xl font-bold lh-base text-center text-white py-4'>Key Features </h1>
                        <Col lg={6}>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Eliminates paper dispatch sheets, manual updates, and double-entry.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Allows drivers to retrieve a list of assigned tickets for both multi-stop routes, bale-routes & “out/back” runs.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Provides drivers with “real-time” information on service assignments, change orders and additions.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Lets drivers easily Complete or Fail services.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Provides turn-by-turn directions to service locations, site location notes and contact.</h6></div>
                        </Col>
                        <Col lg={6}>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Easily add notes, comments, or explanations of failed services while on location</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Records bales counts that were picked up or left behind.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Allows equipment or site photos to be captured and instantly uploaded to each dispatch ticket.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Gives back-office up-to-date visibility on status which can be viewed through the cieTrade dispatch board.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Restricts drivers to view only their own assigned service jobs.</h6></div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container className='py-24'>
                <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold lh-base text-center py-2'>Want to see a full list of features? </h1>
                <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold lh-base text-center text-red-600 '>Download our </h1>
                <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold lh-base text-center text-red-600'>cieDispatch brochure</h1>
                <div className='py-5'> <center><a href='#' className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold text-base ">Download Brochure<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></center></div>
            </Container>

            <div className='bg-light'>
                <div className='py-5'>
                    <Container>
                        <Row>
                            <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold lh-base text-center py-4'>Additional Tools</h1>

                            <Col lg={6} >
                                <center><img src={Selfservice} className='w-full py-2'></img></center>
                                <h1 className='font-bold text-red-600 text-xl pt-3'>WEB APPLICATIONS</h1>
                                <h1 className='font-bold  text-3xl py-2'>Self-Service Portal</h1>
                                <h6 className='text-gray-600 text-lg py-3'>cieTrade’s self-service portal gives supply chain partners 24/7 on-demand access and visibility to recovered material, pricing, shipments, payments, documents and more.</h6>
                                <div className='py-3'> <a href='#' className="text-red-600 font-bold text-base py-1 ">Learn More<i class="fa-solid fa-arrow-right text-white bg-red-600 text-sm px-1 rounded-3xl ms-2"></i></a></div>
                            </Col>
                            <Col lg={6}>
                                <center><img src={Ciemobile} className='w-4/5'></img></center>
                                <h1 className='font-bold text-red-600 text-xl pt-3'>MOBILE APPS</h1>
                                <h1 className='font-bold  text-3xl py-2'>cieDispatch</h1>
                                <h6 className='text-gray-600 text-lg py-3'>cieDispatch is a free mobile app that lets your drivers retrieve a list of assigned tickets, get directions to service locations, update job status, record notes, and even capture photos.</h6>
                                <div className='py-3'> <a href='#' className="text-red-600 font-bold lg:text-base md:text-center sm:text-center">Learn More<i class="fa-solid fa-arrow-right text-white bg-red-600 text-sm px-1 rounded-3xl ms-2"></i></a></div>
                            </Col>
                        </Row>
                    </Container>
                </div >
                <div className="max-w-5xl mx-auto p-4">
                    <h1 className="text-3xl font-bold text-center mb-8">FAQ</h1>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`border-1 transition-all duration-300 py-2 ${activeIndex === index ? "border-red-600 shadow-sm" : "border-gray-300"}`} >
                                <div className="flex justify-between items-center p-4 cursor-pointer" onClick={() => toggleFAQ(index)} >
                                    <h2 className={`font-bold text-lg transition-all duration-300 text-xl ${activeIndex === index ? "text-red-600" : "text-gray-500"}`}> {faq.question}</h2>
                                    <span className={`text-3xl font-bold transition-all duration-300 ${activeIndex === index ? "text-red-600" : "text-gray-500"}`} >
                                        {activeIndex === index ? "-" : "+"}
                                    </span>
                                </div>{activeIndex === index && (
                                    <div className="p-4 text-gray-600 text-lg ">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ciedispatch;