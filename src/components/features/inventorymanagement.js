import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from "react";
import Scanning from '../../assets/img/scanning-barcode-with-scanner.webp';
import Norkol from '../../assets/img/norkol-logo.png';
import Ticket from '../../assets/img/ticket.png';
import Barcoade from '../../assets/img/barcode.png';
import Expense from '../../assets/img/Expense.png';
import Warehouse from '../../assets/img/Warehouse.png';
import Inventoryavailabel from '../../assets/img/Inventoryavailable.png';
import Cielocation from '../../assets/img/cielocation.png';
import Ciemobile from '../../assets/img/ciemobile.png';
function InventoryManagement() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What types of inventory tracking does cieTrade support?",
            answer: "cieTrade currently supports four inventory tracking models including: serial, bulk-perpetual, bulk non-perpetual, and do-not-track. Workflows that use multiple products of a different inventory model used collectively are supported.",
        },
        {
            question: "Does cieTrade support scale integration?",
            answer: "Yes, cieTrade offers direct integration with barcode scanners and label printers that support Bluetooth compatability.",
        },
        {
            question: "Can I add processing and other costs to my inventory?",
            answer: "Yes, cieTrade uses a “landed cost” inventory valuation method that capitalizes freight, storage, and processing costs for more accurate reporting of COGS (Cost of Goods Sold.)",
        },
        {
            question: "What references can I use to search for inventory in cieTrade?",
            answer: "cieTrade lets you quickly find items and loads by product/grade, serial number, supplier, user definable product attributes and more.",
        },
        {
            question: "What types of inventory reports does cieTrade provide?",
            answer: "cieTrade provides a wide range of inventory reports from a general inventory overview to inventory sales/purchases, inventory available and much more– each over a specified period of time."
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <div>
                <div className="h-full relative bg-cover   " style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/08/42-26814321-scaled.jpg.webp)` }}>
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                    <div className="text-center relative py-40">
                        <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-white font-bold leading-tight">Inventory Management</h1>
                        <h1 className="lg:text-xl text-white py-3 leading-tight">Take control of your paper stock, recovered fiber, or scrap material inventory</h1>
                        <div className='my-5'>
                            <a href='#' className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold text-base ">Download Brochure<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                        </div>
                    </div>
                </div>

                <Container>
                    <Row className=' py-5 m-4 my-5'>
                        <Col lg={6} className=''><img src={Scanning} alt="Scanning" className='h-w-full img-fluid' />   </Col>
                        <Col lg={6} className='align-self-center'>
                            <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold lh-base'>Take control of your paper stock,<br /> recovered fiber or scrap material <br />inventory</h1>
                            <h1 className='text-gray-500 py-3 lg:text-lg md:text-sm'>cieTrade’s inventory management and material processing solution provides the capabilities you need to get control of your paper stock, recovered fiber, or scrap material inventory. It increases visibility and provides traceability of material for improved accountability, offers landed cost valuations, tracks rep contribution, production costs, yield, and more, all while helping to maximize the productivity of your warehouse.</h1>
                        </Col>
                    </Row>
                </Container>
                <div className='bg-gray-900 text-center py-5'>
                    <i class="fa-solid fa-quote-left text-white bg-red-500 p-1 rounded-full px-3 text-2xl"></i>
                    <h6 className='text-white text-xl py-3 lh-base'>cieTrade has proven essential in helping us manage and control our inventory including both warehouse<br /> sales and direct shipments across multiple locations. Its visibility into valuations and cost of sales has been<br /> a key benefit to improve decision making and avoid losses while their mobile apps have really helped <br />elevate the effectiveness of our warehouse.</h6>
                    <h6 className='text-white text-xl '>Al Gerrard, Director of Operations</h6>
                    <center><img src={Norkol} alt="Norkol" className='h-10/12 img-fluid' /></center>
                </div>

                <Container className='lg:px-40 md:px-0 sm:px-0'>
                    <Row className='py-16'>
                        <Col lg={6} className='align-self-center'>
                            <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold lh-base'>Advanced Material <br />Traceability </h1>
                            <h1 className='text-gray-500 py-3 lg:text-lg md:text-sm'>cieTrade tracks your inventory in real-time by warehouse, lot, raw/finished goods, condition and more. It supports searchable product attributes and helps identify material genealogy and consumption for increased material quality control, claims and accountability. </h1>
                        </Col>

                        <Col lg={6} className=''>  <center><img src={Ticket} alt="ticket" className='w-full img-fluid' /> </center>  </Col>
                    </Row>
                </Container>
                <Container className='lg:px-40 md:px-0 sm:px-0'>
                    <Row className='py-16'>
                        <Col lg={6} className=''>  <center><img src={Barcoade} alt="ticket" className='hw-full img-fluid' /> </center>  </Col>
                        <Col lg={6} className='align-self-center'>
                            <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold lh-base'>  Barcode Scanning Support </h1>
                            <h1 className='text-gray-500 py-3 lg:text-lg md:text-sm '>Built-in barcode scanning solutions help save time, improve stock identification and accuracy of material movements with customizable labels, boosts productivity and avoids errors when picking inventory for production and shipping. </h1>
                        </Col>
                    </Row>
                </Container>
                <Container className='lg:px-40 md:px-0 sm:px-0'>
                    <Row className='py-16'>
                        <Col lg={6} className='align-self-center'>
                            <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold lh-base'>Processing & Cost Allocations </h1>
                            <h1 className='text-gray-500 py-3 lg:text-lg md:text-sm'>cieTrade uses an actual or “landed” cost inventory valuation method that capitalizes freight, warehouse storage and processing costs to selected inventory for more accurate reporting of COGS, gross profit, sales rep. contribution and more. </h1>
                        </Col>
                        <Col lg={6} className=''>  <center><img src={Expense} alt="ticket" className='w-full img-fluid' /> </center>  </Col>
                    </Row>
                </Container>
                <Container className='lg:px-40 md:px-0 sm:px-0'>
                    <Row className='py-16'>
                        <Col lg={6} className=''>  <center><img src={Warehouse} alt="ticket" className='w-full img-fluid' /> </center>  </Col>
                        <Col lg={6} className='align-self-center'>
                            <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold lh-base'>Mobile Warehouse Tools </h1>
                            <h1 className='text-gray-500 py-3 lg:text-lg md:text-sm'>Our touch-friendly mobile warehouse tools streamline operations by connecting your shop floor with the back-office, helping to eliminate paper break-down sheets and shipping logs for various jobs including unloading, processing, packing and more.</h1>
                        </Col>
                    </Row>
                </Container>
                <Container className='lg:px-40 md:px-0 sm:px-0'>
                    <Row className='py-16'>
                        <Col lg={6} className='align-self-center'>
                            <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold lh-base'>Inventory Reports </h1>
                            <h1 className='text-gray-500 py-3 lg:text-lg md:text-sm'>Specialized real-time inventory reports provide instant visibility on stock position and historial data by product, supplier, location, sales & purchase trend, top products/grades and much more. </h1>
                        </Col>

                        <Col lg={6} className=''>  <center><img src={Inventoryavailabel} alt="ticket" className='w-full img-fluid' /> </center>  </Col>
                    </Row>
                </Container>
                <div className='bg-gray-900'>
                    <Container >
                        <Row className='py-3'>
                            <h1 className='lg:text-5xl md:text-3xl sm:text-2xl font-bold lh-base text-center text-white py-5'>Key Features </h1>
                            <Col lg={6}>
                                <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Tracks bulk material and serial (itemized) inventory by weight</h6></div>
                                <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Supports both lot and perpetual (average cost) inventory accounting models </h6></div>
                                <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Tracks material in real time by warehouse, lot, roll & skid number, raw/finished goods,condition, age and much more</h6></div>
                                <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Supports user-definable product attribute combinations</h6></div>
                                <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Provides material traceability by supplier and buyer</h6></div>
                                <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Capitalizes storage charges or handling costs into existing inventory at any time</h6></div>
                                <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Landed cost valuations capitalizing freight, storage, and processing costs</h6></div>
                            </Col>
                            <Col lg={6}>
                                <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Provides barcode scanning support with customizable labels to save time and improve identification and accuracy of material movements & shipments</h6></div>
                                <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Provides specialized reports and forms to make it easy to post inventory adjustments and capture physical counts</h6></div>
                                <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Instant summary and detail reports on inventory position, roll forward, and inventor  valuation </h6></div>
                                <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Increases overall visibility and control by reducing or eliminating cycle counts</h6></div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Container className='py-24'>
                <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold lh-base text-center py-2'>Want to see a full list of features? </h1>
                <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold lh-base text-center text-red-600 '>Download our inventory </h1>
                <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold lh-base text-center text-red-600'>management  brochure</h1>
                <div className='py-5'> <center><a href='#' className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold text-base ">Download Brochure<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></center></div>
            </Container>
            <div className='bg-light'>
                <div className='py-5'>
                    <Container>
                        <Row>
                            <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold lh-base text-center py-4'>Additional Tools</h1>
                            <Col lg={1}></Col>
                            <Col lg={5} >
                                <center><img src={Cielocation} className='w-2/3'></img></center>
                                <h1 className='font-bold text-red-600 text-xl pt-3'>MOBILE APPS</h1>
                                <h1 className='font-bold  text-3xl py-2'>cieLocation</h1>
                                <h6 className='text-gray-600 text-lg py-3'>cieTrade’s inventory scanning app helps your warehouse quickly check and edit inventory, confirm inventory availability and minimize time spent with stock and cycle counts.</h6>
                                <div className='py-3'> <a href='#' className="text-red-600 font-bold text-base py-1 ">Learn More<i class="fa-solid fa-arrow-right text-white bg-red-600 text-sm p-1 rounded-3xl ms-2"></i></a></div>
                            </Col>
                            <Col lg={5}>
                                <center><img src={Ciemobile} className='w-2/3'></img></center>
                                <h1 className='font-bold text-red-600 text-xl pt-3'>MOBILE APPS</h1>
                                <h1 className='font-bold  text-3xl py-2'>cieLocation</h1>
                                <h6 className='text-gray-600 text-lg py-3'>cieTrade’s inventory scanning app helps your warehouse quickly check and edit inventory, confirm inventory availability and minimize time spent with stock and cycle counts.</h6>
                                <div className='py-3'> <a href='#' className="text-red-600 font-bold lg:text-base md:text-center sm:text-center">Learn More<i class="fa-solid fa-arrow-right text-white bg-red-600 text-sm p-1 rounded-3xl ms-2"></i></a></div>
                            </Col>
                            <Col lg={1}></Col>
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

    )

};

export default InventoryManagement;