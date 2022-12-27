import React from 'react'
import { Counter } from '../features/counter/Counter'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className="header-container">
        <h1 className="header">SFXDX</h1>
        <Counter />
    </div>
  )
}

export default Header