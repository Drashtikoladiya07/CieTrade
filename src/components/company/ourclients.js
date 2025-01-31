import { Row, Col, Container } from 'react-bootstrap';
import React from "react";
import YouTube from 'react-youtube';
import Casestudy from '../../assets/img/casestudypng.webp';
import Pasharecycling from '../../assets/img/pasharecycling.png';
import Commercialplasticscase from '../../assets/img/CommercialPlasticscase.png';



function Ourclients() {
    return (
        <div>
            <div className="h-full relative bg-cover bg-center  " style={{ backgroundImage: `url(https://i.ytimg.com/vi/oBY6wR2FAqk/maxresdefault.jpg)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative  py-40  ">
                    <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-white font-bold leading-tight">Our Clients</h1>
                    <h1 className="lg:text-xl text-white py-3 leading-tight">cieTrade has a diverse worldwide customer base that’s transacted billions in goods and <br />shipped hundreds of thousands of containers on our software. Our clients include many of<br /> the leading trading houses, scrap exporters, and recycling plants. cieTrade’s flexible design<br /> has also attracted waste brokers and national accounts consolidators looking to avoid<br /> using spreadsheets or expensive custom systems.</h1>
                </div>
            </div>

            <Container>
                <Row className='g-0 py-20'>
                    <Col lg={6}>
                        <YouTube videoId="mwtsCFbxXa4" />
                    </Col>
                    <Col lg={6} >
                        <h6 className=' font-bold text-2xl text-red-600 py-2'>SUCCESS STORY</h6>
                        <h6 className='text-lg lg:text-5xl md:text-3xl sm:text-2xl font-bold py-3'>Wasteology</h6>
                        <h6 className='text-gray-600 text-xl '>Learn how Wasteology, a waste and recycling services broker, eliminated double-entry, streamlined dispatch management and improved their billing process with cieTrade’s industry-specific software, tailored to meet evolving needs as their operation scales.</h6>
                        <div className='py-14'>
                            <a href='#' className="text-white bg-red-600 hover:bg-red-700 px-4 py-4  font-bold text-lg ">Watch Success Story<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                        </div>
                    </Col>
                </Row>

                <Row className='g-0 py-20'>
                    <Col lg={6}>
                        <YouTube videoId="mehip29GhNI" />
                    </Col>
                    <Col lg={6} >
                        <h6 className=' font-bold text-2xl text-red-600 py-2'>SUCCESS STORY</h6>
                        <h6 className='text-lg lg:text-5xl md:text-3xl sm:text-2xl font-bold py-3'>AP&J Recycling</h6>
                        <h6 className='text-gray-600 text-xl '>As a rapidly growing plastics recycling business, AP&J Recycling needed an industry-specific solution to be able to manage their operation. Learn how cieTrade helped eliminate manual spreadsheets, improve inventory tracking and increase accuracy of COGS.</h6>
                        <div className='py-14'>
                            <a href='#' className="text-white bg-red-600 hover:bg-red-700 px-4 py-4  font-bold text-lg ">Watch Success Story<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                        </div>
                    </Col>
                </Row>
                <Row className='g-0 py-20'>
                    <Col lg={6}><img src={Casestudy} className='w-5/6 h-full'></img></Col>
                    <Col lg={6} >
                        <h6 className=' font-bold text-2xl text-red-600 py-2'>CASE STUDY</h6>
                        <h6 className='text-lg lg:text-5xl md:text-3xl sm:text-2xl font-bold py-3'>iSustain Recycling</h6>
                        <h6 className='text-gray-600 text-xl '>Prior to using cieTrade, iSustain ran their company solely on manual spreadsheets; however, their team struggled to keep up as the business grew and expanded. Without a proper software system in place, challenges quickly began to arise, prompting iSustain to connect with cieTrade as a solution.</h6>
                        <div className='py-14'>
                            <a href='#' className="text-white bg-red-600 hover:bg-red-700 px-4 py-4  font-bold text-lg ">Watch Success Story<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                        </div>
                    </Col>
                </Row>
                <Row className='g-0 py-20'>
                    <Col lg={6}><img src={Pasharecycling} className='w-5/6 h-full'></img></Col>
                    <Col lg={6} >
                        <h6 className=' font-bold text-2xl text-red-600 py-2'>CASE STUDY</h6>
                        <h6 className='text-lg lg:text-5xl md:text-3xl sm:text-2xl font-bold py-3'>Pasha Recycling</h6>
                        <h6 className='text-gray-600 text-xl '>In their continued commitment to embrace new technology and introduce leading-edge techniques to speed up and refine their operations, Pasha Recycling sought a comprehensive software that could provide complete traceability throughout their supply chain.</h6>
                        <div className='py-14'>
                            <a href='#' className="text-white bg-red-600 hover:bg-red-700 px-4 py-4  font-bold text-lg ">Watch Success Story<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                        </div>
                    </Col>
                </Row>
                <Row className='g-0 py-20'>
                    <Col lg={6}><img src={Commercialplasticscase} className='w-5/6 h-full'></img></Col>
                    <Col lg={6} >
                        <h6 className=' font-bold text-2xl text-red-600 py-2'>CASE STUDY</h6>
                        <h6 className='text-lg lg:text-5xl md:text-3xl sm:text-2xl font-bold py-3'>Commercial Plastics Recycling Inc.</h6>
                        <h6 className='text-gray-600 text-xl '>Before cieTrade, Commercial Plastics developed its own custom Microsoft Access database to track inventory and manage operations. However, their team soon realized the system wasn’t as efficient as they’d hoped and it’d become difficult and time-consuming to maintain a home-grown program</h6>
                        <div className='py-14'>
                            <a href='#' className="text-white bg-red-600 hover:bg-red-700 px-4 py-4  font-bold text-lg ">Watch Success Story<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                        </div>
                    </Col>
                </Row>
                <Row className='g-0 py-20'>
                    <Col lg={6}>
                        <YouTube videoId="oBY6wR2FAqk" />
                    </Col>
                    <Col lg={6} >
                        <h6 className=' font-bold text-2xl text-red-600 py-2'>SUCCESS STORY</h6>
                        <h6 className='text-lg lg:text-5xl md:text-3xl sm:text-2xl font-bold py-3'>Canusa Hershman</h6>
                        <h6 className='text-gray-600 text-xl '>Lack of real-time integration with accounting software proved to be problematic for Canusa Hershman. cieTrade helped by handling transactions faster, allowing them to grow from a domestic to an international trader.</h6>
                        <div className='py-14'>
                            <a href='#' className="text-white bg-red-600 hover:bg-red-700 px-4 py-4  font-bold text-lg ">Watch Success Story<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                        </div>
                    </Col>
                </Row>
                <Row className='g-0 py-20'>
                    <Col lg={6}>
                        <YouTube videoId="yxcsJQlRxAk" />
                    </Col>
                    <Col lg={6} >
                        <h6 className=' font-bold text-2xl text-red-600 py-2'>SUCCESS STORY</h6>
                        <h6 className='text-lg lg:text-5xl md:text-3xl sm:text-2xl font-bold py-3'>The Paper Tigers</h6>
                        <h6 className='text-gray-600 text-xl '>Having started with a custom solution, The Paper Tigers quickly began to realize the redundancies and loss of productivity. Learn how cieTrade helped grow their business while reducing operational costs by 35-40%.</h6>
                        <div className='py-14'>
                            <a href='#' className="text-white bg-red-600 hover:bg-red-700 px-4 py-4  font-bold text-lg ">Watch Success Story<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Ourclients;