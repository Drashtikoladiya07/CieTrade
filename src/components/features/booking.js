import { Row, Col, Container } from 'react-bootstrap';
import React, { useState } from "react";
import Bookingonscreen from '../../assets/img/booking-on-screen.png'
import Bookingmanagement from '../../assets/img/booking-management.png.webp';
import Bookingnotification from '../../assets/img/booking-notification-portal.png.webp';
import Containermanagement from '../../assets/img/container-management.png.webp';
import Partnerintegrations from '../../assets/img/partner-integrations.png.webp';
import Internationaltrade from '../../assets/img/international-trade.png';
import Ciephoto from '../../assets/img/ciephoto.png';
function Booking() {
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
            <div className="h-full relative bg-cover   " style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2025/01/2025-01-03_14h47_34.png.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative  py-40  ">
                    <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-white font-bold leading-tight">Booking and Container Management</h1>
                    <h1 className="lg:text-xl text-white py-3 leading-tight">Booking and container management software for exporters.</h1>
                    <div className='my-5'>
                        <a href='#' className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold text-base ">Download Brochure<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                    </div>
                </div>
            </div>

            <div className='px-4 bg-zinc'>
                <Row className='py-20'>
                    <Col lg={6} md={12}>
                        <center>
                            <img src={Bookingonscreen} alt="booking" className='img-fluid' /></center></Col>

                    <Col lg={6} md={12} className=''>
                        <h1 className='bg-zinc-800 lg:text-5xl md:text-4xl sm:text-2xl font-bold lh-sm'>Easily track and manage your export bookings and containers</h1>
                        <h6 className='text-gray-500 lg:text-xl md:text-lg py-4 '>cieTrade leverages 25+ years history of working with the top exporters and international trading houses to provide critical features to help you stay competitive in today’s markets. Our booking and container management tools streamline container shipping workflows, enhance visibility and eliminate the inefficiencies of manual spreadsheets or redundant data entry. From tracking booking fulfillment to managing cut-off dates and generating export documentation, cieTrade offers a single, comprehensive solution to keep your operations on track and your supply chain connected.</h6>
                        <div className='mt-3 '>
                            <a href='#' className="border-3 font-bold border-red-600 text-red-600 font-bold py-4 px-3 me-2 ">see more features for exporters<i class="fa-solid fa-arrow-right ps-1 pt-1"></i></a>
                            <a href='#' className="text-white bg-red-600 hover:bg-red-700 py-4 font-bold px-3">Request Demo<i class="fa-solid fa-arrow-right ps-1 pt-1 "></i></a>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='bg-gray-800 py-5'>
                <h1 className='lg:text-4xl md:text-4xl sm:text-2xl font-bold lh-base text-white 0 text-center'>How cieTrade can help you improve your</h1>
                <h1 className='lg:text-4xl md:text-4xl sm:text-2xl font-bold lh-sm text-white text-center'>booking and container management</h1>
                <Container>
                    <Row className='g-0 pt-14'>
                        <Col lg={3} md={6} className='pe-4 py-4'>
                            <div><i class="fa-solid fa-desktop text-red-600 text-5xl py-2"></i>
                                <h1 className='text-white text-3xl font-bold py-3'>Centralize your operations</h1>
                                <h1 className='text-white text-xl '>Get instant access to all of your bookings, associated containers, documents, container photos and in  single platform.</h1>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className='pe-4 py-4'>
                            <div><i class="fa-solid fa-gears text-red-600 text-5xl py-2"></i>
                                <h1 className='text-white text-3xl font-bold py-3'>Improve logistics management</h1>
                                <h1 className='text-white text-xl '>Integrate and organize all stages of your export cycle from contract management and planning to execution and documentation.</h1>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className='pe-4 py-4'>
                            <div>
                                <i class="fa-solid fa-calendar-days text-red-600 text-5xl py-2"> </i>
                                <h1 className='text-white text-3xl font-bold py-3'>Monitor cut-offs and ETAs</h1>
                                <h1 className='text-white text-xl '>Stay on top of critical dates and document submission deadlines with automatic system notifications and alerts.</h1>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className='pe-4 py-4'>
                            <div><i class="fa-solid fa-envelope text-red-600 text-5xl py-2"></i>
                                <h1 className='text-white text-3xl font-bold py-3' >Easily send documents & photos</h1>
                                <h1 className='text-white text-xl '>Share container photos and required documentation directly with your supply-chain partners through specialized web portals.</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                <Container>
                    <Row className='g-0 py-20'>
                        <Col lg={6}>
                            <h6 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold py-4'>Booking Management</h6>
                            <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-xl text-gray-500  '> View and modify all of your bookings in one place.</h6></div>
                            <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-xl text-gray-500  '>Record booking details including ocean carrier, freight rate, POL and POD, booking instructions and more. </h6></div>
                            <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-xl text-gray-500  '>Instantly generate custom branded export documents including shipping line instructions, packing lists, booking statement notifications and more.</h6></div>
                            <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-xl text-gray-500  '>Track document and VGM cut-off dates and receive notifications for upcoming and missed cut-offs.</h6></div>
                            <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-xl text-gray-500  '> Automated booking ETA service contacts supported ocean carriers each day to check the port arrival status of any open bookings, providing real-time updates and notifications on the estimated time of arrival (ETAs) and minimizing time spent checking carrier and terminal websites.</h6></div>
                        </Col>
                        <Col lg={6}><img src={Bookingmanagement} className=''></img></Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='g-0 py-20'>
                        <Col lg={6}><img src={Containermanagement} className=''></img></Col>
                        <Col lg={6}>
                            <h6 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold py-4'>Container Management</h6>
                            <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-xl text-gray-500 '>Centralized container board organizes all of your containers in one place while automatically checking for and preventing duplicate container numbers.</h6></div>
                            <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-xl text-gray-500 '>Color-coded labels make it easy to see the status of each container, including staged, available for sale, packed or sold.</h6></div>
                            <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-xl text-gray-500 '>Import container shipment details including container and seal numbers, net and tare weights, VGM and more directly from supplier spreadsheets.</h6></div>
                            <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-xl text-gray-500 '>Upload export container photos directly from email messages, browser downloads or through our integrated mobile app for compliance and claims.</h6></div>
                            <div className='py-3'> <a href='#' className="text-red-600 font-bold lg:text-base md:text-center sm:text-center">Learn More<i class="fa-solid fa-arrow-right text-white bg-red-600 text-sm px-1 rounded-3xl ms-2"></i></a></div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='g-0 py-20'>
                        <Col lg={6} className='py-20'>
                            <h6 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold py-4'>Partner Integrations</h6>
                            <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-xl text-gray-500  '> Seamlessly integrate with Infor-Nexus and ACE AES direct.​</h6></div>
                            <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-xl text-gray-500  '>Submit booking requests and shipping instructions to ocean freight carriers and send Shipper’s Export Declarations (SED) filings to the US Census Bureau directly from the platform.​</h6></div>
                        </Col>
                        <Col lg={6}><img src={Partnerintegrations} className=''></img></Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='g-0 py-20'>
                        <Col lg={6}><img src={Bookingnotification} className=''></img></Col>
                        <Col lg={6} className='py-20'>
                            <h6 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold py-4'>Booking Notifications for your Customers</h6>
                            <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-xl text-gray-500 '>Provide your export receivers with instant access to all of their shipping notifications from a single web page that can be shared directly from the Booking or Shipping Worksheet in cieTrade.</h6></div>
                            <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-xl text-gray-500 '>Generate an email with a secure link that makes it easier for your customers to retrieve their packing list report and download container photos while saving you time and eliminating the need to send these attachments manually.</h6></div>

                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='bg-gray-800 py-5'>
                <h1 className='lg:text-5xl md:text-4xl sm:text-2xl font-bold lh-base text-white 0 text-center'>Learn how cieTrade can help you improve</h1>
                <h1 className='lg:text-5xl md:text-4xl sm:text-2xl font-bold lh-sm text-white text-center'>your booking and container management</h1>
                <div className='py-5'> <center><a href='#' className="text-white bg-red-600 hover:bg-red-700 px-4 py-4  font-bold text-base ">Request Demo<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></center></div>
            </div>

            <Container>
                <Row className='py-10'>
                    <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold lh-base text-center py-4'>Additional Tools</h1>
                    <Col lg={6} className='py-3' >
                        <center><img src={Internationaltrade} className='w-full'></img></center>
                        <h1 className='font-bold text-red-600 text-xl pt-3'>MOBILE APPS</h1>
                        <h1 className='font-bold  text-3xl py-2'>cieLocation</h1>
                        <h6 className='text-gray-600 text-lg py-3'>cieTrade’s inventory scanning app helps your warehouse quickly check and edit inventory, confirm inventory availability and minimize time spent with stock and cycle counts.</h6>
                        <div className='py-3'> <a href='#' className="text-red-600 font-bold text-base py-1 ">Learn More<i class="fa-solid fa-arrow-right text-white bg-red-600 text-sm p-1 rounded-3xl ms-2"></i></a></div>
                    </Col>
                    <Col lg={6} className='py-3'>
                        <center><img src={Ciephoto} className='w-full'></img></center>
                        <h1 className='font-bold text-red-600 text-xl pt-3'>MOBILE APPS</h1>
                        <h1 className='font-bold  text-3xl py-2'>cieLocation</h1>
                        <h6 className='text-gray-600 text-lg py-3'>cieTrade’s inventory scanning app helps your warehouse quickly check and edit inventory, confirm inventory availability and minimize time spent with stock and cycle counts.</h6>
                        <div className='py-3'> <a href='#' className="text-red-600 font-bold lg:text-base md:text-center sm:text-center">Learn More<i class="fa-solid fa-arrow-right text-white bg-red-600 text-sm p-1 rounded-3xl ms-2"></i></a></div>
                    </Col>
                </Row>
            </Container>
            <div className='bg-light py-5 '>
                <div className="max-w-5xl mx-auto p-4 ">
                    <h1 className="text-4xl font-bold text-center mb-8">FAQ</h1>
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
export default Booking;