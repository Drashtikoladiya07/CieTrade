import { Row, Col, Container } from 'react-bootstrap';
import React from "react";

// import YouTube from 'react-youtube';

function Ciephoto() {
    return (
        <div>
            <div className="h-full relative bg-cover bg-center  " style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/12/IMG_3760_LG-scaled.jpg.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative  py-40  ">
                    <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-white font-bold leading-tight">ciePhoto</h1>
                    <h1 className="lg:text-xl text-white py-3 leading-tight">Export photos made easy</h1>
                    <div className='my-5'>
                        <a href='#' className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold text-base ">Download Brochure<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                    </div>
                </div>
            </div>

            <Container>
                <Row className='g-0 p-20'>
                    {/* <Col lg={6}><img src={Cielocation} className='w-full'></img></Col> */}
                    <Col lg={6} className='py-20'>
                        <h6 className='lg:text-5xl md:4xl sm:text-3xl font-bold py-3 lh-sm'>Streamline inventory management and minimize
                            time spent with physical stock counts</h6>
                        <div className='flex py-2'><h6 className='text-xl text-gray-500 '><span className='font-bold text-red-600'>cieLocation</span> improves identification and accuracy of material movements across warehouse locations by providing warehouse personnel with an instant way of identifying and relocating inventory, checking and confirming the availability of items in your warehouse and minimizing time spent with physical stock and cycle counts.</h6></div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Ciephoto;