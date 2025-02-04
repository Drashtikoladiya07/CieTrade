import { Row, Col, Container } from 'react-bootstrap';
import React from "react";
import Appstore from '../../assets/img/appstore.png';
import Googleplay from '../../assets/img/googleplay.png';
import Ciemobilelarge from '../../assets/img/ciemobile-large.png';
import YouTube from 'react-youtube';

function Ciemobile() {
    return (
        <div>
            <div className="h-full relative bg-cover bg-center  " style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/08/2022-08-04_10h16_35-e1659622939307.png.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative  py-40  ">
                    <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-white font-bold leading-tight">cieMobile</h1>
                    <h1 className="lg:text-xl text-white py-3 leading-tight">Take cieTrade’s trading and recycling software to go</h1>
                    <div className='my-5'>
                        <a href='#' className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold text-base ">Download Brochure<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                    </div>
                </div>
            </div>
            <Container>
                <Row className='g-0 p-20 lg:px-10 md:px-10 sm:px-10'>
                    <Col lg={6}><center><img src={Ciemobilelarge} className='w-full py-5 '></img></center></Col>
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
        </div>
    )
}

export default Ciemobile;