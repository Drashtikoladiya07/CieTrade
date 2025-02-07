import { Row, Col, Container } from 'react-bootstrap';
import React from "react";

function Commercial(){
    const data={
        info:[
            {time:">12%",description:"Reduction in errors and typos after eliminating manual spreadsheets which helped avoid costly settlement and accounting mistakes."},
            {time:"",description:""},
            {time:"",description:""},
            {time:"",description:""},
        ]
        
        
        
        
    }
    return(
        <div>
            <div className="w-full relative bg-cover bg-center" style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/10/PET1.jpg.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative  pb-32 pt-52">
                    <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-white font-bold leading-tight">cieTrade Gives Commercial Plasticsr<br />Recycling Greater Control and<br/>Oversight.</h1>
                    <h1 className="lg:text-xl text-white py-3 leading-tight">Learn how Commercial Plastics Recycling improved operational efficiency and gained insight to inventory values and costs <br />with cieTrade’s specialized functions and reports.</h1>
                </div>
            </div>
            <Container>

            </Container>
        </div>

    )
}
export default Commercial;