import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Agricultural from './components/Industries/agricultural';
import Commodity from './components/Industries/commodity ';
import International from './components/Industries/International ';
import Merchant from './components/Industries/merchant';
import Recycling from './components/Industries/recycling';
import Trading from './components/Industries/trading';
import Plant from './components/Industries/plant';
import Scrap from './components/Industries/scrap';
import Brokerage from './components/Industries/brokerage';
import Contact from './components/home/contactus';
import Brochures from './components/brochures/brochures';
import Bagricultural from './components/brochures/b-agricultural';
import Bcommodity from './components/brochures/b.commodity';
import Binternational from './components/brochures/b-international';
import Bmerchant from './components/brochures/b-merchant';
import Brecycling from './components/brochures/b-recycling';
import Btrading from './components/brochures/b-trading';
import Bplant from './components/brochures/b-plant';
import Bscrap from './components/brochures/b-scrap';
import Bbrokerage from './components/brochures/b-brokerage';
import Requestdemo from './components/home/requestdemo';
import Login from './components/home/login';
import FooterP from './components/footer/footerp';
import WhyCieTrade from './components/footer/Whycietrade';
import Ourstory from './components/footer/ourstory';
import Privacypolicy from './components/footer/Privacypolicy';
import Terms from './components/footer/terms';

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Agricultural" element={<Agricultural />} />
        <Route path="/Commodity" element={<Commodity />} />
        <Route path="/International" element={<International />} />
        <Route path="/Merchant" element={<Merchant />} />
        <Route path="/Recycling" element={<Recycling />} />
        <Route path="/Trading" element={<Trading />} />
        <Route path="/Plant" element={<Plant />} />
        <Route path="/Scrap" element={<Scrap />} />
        <Route path="/Brokerage" element={<Brokerage />} />
        <Route path="/Brochures" element={<Brochures />} />
        <Route path="/Bagricultural" element={<Bagricultural />} />
        <Route path="/Bcommodity" element={<Bcommodity />} />
        <Route path="/Binternational" element={<Binternational />} />
        <Route path="/Bmerchant" element={<Bmerchant />} />
        <Route path="/Brecycling" element={<Brecycling />} />
        <Route path="/Btrading" element={<Btrading />} />
        <Route path="/Bplant" element={<Bplant />} />
        <Route path="/Bscrap" element={<Bscrap />} />
        <Route path="/Bbrokerage" element={<Bbrokerage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Requestdemo" element={<Requestdemo />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/WhyCieTrade" element={<WhyCieTrade />} />
        <Route path="/Ourstory" element={<Ourstory />} />
        <Route path="/Privacypolicy" element={<Privacypolicy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <FooterP />
    </Router>
  );
};

export default App;