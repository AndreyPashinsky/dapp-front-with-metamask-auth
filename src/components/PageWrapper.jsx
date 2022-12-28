import React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../styles/Background.css';

const PageWrapper = ({ children, title, description }) => {
  return (
    <>
    <Header />
        { children }
    <Footer />
    <div className="area">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="shape-3"></div>
        <div className="shape-4"></div>
    </div>
    </>
  )
}

export default PageWrapper