import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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
import Requstdemo from './components/home/requestdemo';
import Login from './components/home/login';
import FooterP from './components/footer/footerp';
import WhyCieTrade from './components/footer/Whycietrade';
import Ourstory from './components/footer/ourstory';
import Privacypolicy from './components/footer/Privacypolicy';
import Terms from './components/footer/terms';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    {/* <Home /> */}
    {/* <Agricultural /> */}
    {/* <Commodity /> */}
    {/* <International /> */}
    {/* <Merchant /> */}
    {/* <Recycling /> */}
    {/* <Trading /> */}
    {/* <Plant /> */}
    {/* <Scrap /> */}
    {/* <Brokerage /> */}
    {/* <Contact /> */}
    {/* <Brochures /> */}
    {/* <Bagricultural /> */}
    {/* <Bcommodity /> */}
    {/* <Binternational /> */}
    {/* <Bmerchant /> */}
    {/* <Brecycling /> */}
    {/* <Btrading /> */}
    {/* <Bplant /> */}
    {/* <Bscrap /> */}
    {/* <Bbrokerage /> */}
    {/* <Requstdemo /> */}
    {/* <Login /> */}
    {/* <FooterP /> */}
    {/* <WhyCieTrade /> */}
    {/* <Ourstory /> */}
    {/* <Privacypolicy /> */}
    {/* <Terms /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
