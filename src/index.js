import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import BuyLimit from './components/BuyLimit';
import SellLimit from './components/SellLimit';
import SellMarket from './components/SellMarket';
import BuyMarket from './components/BuyMarket';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="buy-limit" element={<BuyLimit />} />
        <Route path="sell-limit" element={<SellLimit />} />
        <Route path="buy-market" element={<BuyMarket />} />
        <Route path="sell-market" element={<SellMarket />} />        
      </Routes>
    </Router>
  )
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
