import React from 'react'
import { MetamaskConnect } from '../features/Metamask/MetamaskConnect'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className="header-container">
        <h1 className="header">Dapp</h1>
        <MetamaskConnect />
    </div>
  )
}

export default Header