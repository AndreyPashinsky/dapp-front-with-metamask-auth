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
    </>
  )
}

export default PageWrapper