import React from 'react'
import '../styles/Footer.css'

const Footer = () => {

    return (
    <div className="ft">
        <div className="footer-container">
            <h1 className="footer-logo">SFXDX</h1>
            <div className="ul-no-bullets">
                <ul>
                    <li className="li">Privacy Policy</li>
                    <li className="li">Terms and Conditions</li>
                    <li className="li">Cookie Policy</li>
                </ul>
            </div>
            <div className="icons-container">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-square-instagram"></i>
            </div>
        </div>
        <p className="copyright">©2022 All rights reserved. Powered by SFXDX</p>
    </div>
  )
}

export default Footer